import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';
import { Button, ButtonGroup, Profile, Spacing } from '../common';
import homeProfile from '@/assets/images/home_profile.png';
import { convertGender } from '@/lib/utils/convertGender';
import { convertDateToAge } from '@/lib/utils/convertDateToAge';
import { useGetFansQuery, useGetStarsQuery, useToggle } from '@/hooks';
import Modal from 'react-modal';
import { Relationship } from '@/lib/model';
import { useHistory } from 'react-router-dom';
import { routes } from '@/lib/constants/routes';
import { Loading } from '../common/Loading';
import { NextButton } from '../common/NextButton';
import { Empty } from '../common/Empty';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
  },
};

interface ProfileDetailProps {
  memberId: string;
  profileImageUrl?: string;
  birthday?: string;
  name: string;
  species?: string;
  personality?: string;
  gender?: 'MALE' | 'FEMALE';
  visitCount: number;
  relationship: Relationship;
  onUnStar: () => void;
  onStar: () => void;
}

export const ProfileDetail = ({
  memberId,
  profileImageUrl,
  name,
  birthday,
  personality,
  gender,
  species,
  visitCount,
  relationship,
  onUnStar,
  onStar,
}: ProfileDetailProps) => {
  const history = useHistory();

  const [isOpenModal, onToggleModal, onOpenModal, onCloseModal] = useToggle();
  const [modalType, setModalType] = useState<'Star' | 'Fan'>('Star');

  const getStarQuery = useGetStarsQuery(Number(memberId), isOpenModal && modalType === 'Star');
  const getFansQuery = useGetFansQuery(Number(memberId), isOpenModal && modalType === 'Fan');

  const nowData = useMemo(() => {
    if (modalType === 'Fan') {
      return getFansQuery.data?.pages?.flatMap((value) => value.content);
    }

    return getFansQuery.data?.pages?.flatMap((value) => value.content);
  }, [getFansQuery.data?.pages, getStarQuery.data?.pages]);

  const isLoading = getStarQuery.isLoading || getFansQuery.isLoading;
  const isMore = modalType === 'Fan' ? getFansQuery.hasNextPage : getStarQuery.hasNextPage;

  const onClickNext = () => {
    if (modalType === 'Fan') {
      getFansQuery.fetchNextPage();
      return;
    }
    getStarQuery.fetchNextPage();
  };

  const isFan = relationship === 'STAR';

  const onOpenStarMdoal = () => {
    setModalType('Star');
    onOpenModal();
  };

  const onOpenFanModal = () => {
    setModalType('Fan');
    onOpenModal();
  };

  return (
    <>
      <ProfileDetailContainer>
        <ProfileContent>
          <Profile imageURL={profileImageUrl} size="large" />
          <Spacing vertical={12} />
          {(relationship === 'STAR' || relationship === 'UNSTAR') && (
            <Button text={isFan ? '팬 탈퇴' : '팬 가입'} color={isFan ? 'GREY70' : 'EMERALD100'} onClick={isFan ? onUnStar : onStar} />
          )}

          <Spacing vertical={12} />

          <ProfileInfoWrapper>
            <div className="profile_name">{name}</div>
            <Spacing vertical={12} />
            <div className="profile_detail">
              <span>{species}</span>
              <Spacing horizon={8} />
              <span>{birthday && `${convertDateToAge(birthday)}세`}</span>
              <Spacing horizon={8} />
              <span>{gender && convertGender(gender)}</span>
            </div>
            <Spacing vertical={12} />
            <div className="profile_detail" onClick={onToggleModal}>
              방문자 수 {visitCount}
            </div>
          </ProfileInfoWrapper>

          <Spacing vertical={24} />
          {personality}

          <StarFanWrapper>
            <ButtonGroup
              size="small"
              buttons={[
                { text: '스타', onClick: onOpenStarMdoal },
                {
                  text: '팬',
                  onClick: onOpenFanModal,
                },
              ]}
            />
          </StarFanWrapper>
        </ProfileContent>
      </ProfileDetailContainer>

      <Modal isOpen={isOpenModal} style={customStyles} onRequestClose={onCloseModal} contentLabel="Example Modal">
        <ModalContent>
          <h2>{modalType === 'Fan' ? '팬 목록' : '스타 목록'}</h2>
          <Spacing vertical={32} />

          {isLoading && <Loading width={400} />}

          {!isLoading && nowData?.length === 0 && <Empty />}

          {!isLoading && nowData?.length > 0 && (
            <ul>
              {nowData?.map((value) => (
                <StarFanListItem
                  key={value.id}
                  onClick={() => {
                    history.push(routes.HOMEPEE.replace(':id', String(value.memberId)));
                  }}
                >
                  <Profile size="small" imageURL={value.profileImageUrl} />
                  <div>{value.name}</div>
                </StarFanListItem>
              ))}
            </ul>
          )}
          {isMore && <NextButton onClick={onClickNext} />}
        </ModalContent>
      </Modal>
    </>
  );
};

const ProfileDetailContainer = styled.div`
  position: relative;
  min-width: 216px;
  width: 216px;
  height: 420px;
  border-radius: 16px;
  background-image: url(${homeProfile});
  background-repeat: no-repeat;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  height: 100%;
  padding: 32px 0;
`;

const ProfileInfoWrapper = styled.div`
  & .profile_name {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-align: center;
  }

  & .profile_detail {
    display: flex;
    font-size: 13px;
    letter-spacing: 0.2em;
    text-align: center;
  }
`;

const StarFanWrapper = styled.div`
  margin-top: auto;
`;

const ModalContent = styled.section`
  width: 512px;
  min-height: 400px;
  overflow-y: auto;
`;

const StarFanListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  border-bottom: 1px solid ${ColorMap.GREY70};

  &:first-of-type {
    border-top: 1px solid ${ColorMap.GREY70};
  }
`;
