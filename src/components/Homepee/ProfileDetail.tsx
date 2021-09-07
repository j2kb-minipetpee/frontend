import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';
import { Profile, Spacing } from '../common';
import homeProfile from '@/assets/images/home_profile.png';
import { convertGender } from '@/lib/utils/convertGender';
import { convertDateToAge } from '@/lib/utils/convertDateToAge';

interface ProfileDetailProps {
  profileImageUrl?: string;
  birthday?: string;
  name: string;
  species?: string;
  personality?: string;
  gender?: 'MALE' | 'FEMALE';
  visitCount: number;
}

export const ProfileDetail = ({ profileImageUrl, name, birthday, personality, gender, species, visitCount }: ProfileDetailProps) => {
  return (
    <ProfileDetailContainer>
      <ProfileContent>
        <Profile imageURL={profileImageUrl} size="large" />
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
          <div className="profile_detail">공생 {visitCount}</div>
        </ProfileInfoWrapper>

        <Spacing vertical={24} />
        <DescriptionWrapper>{personality}</DescriptionWrapper>
      </ProfileContent>
    </ProfileDetailContainer>
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
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
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

const DescriptionWrapper = styled.div`
  width: 128px;
  height: 125px;
  border: 1px solid ${ColorMap.GREY100};
  font-size: 12px;
  letter-spacing: 0.2em;
  padding: 12px;
`;
