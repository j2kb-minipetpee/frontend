import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Divider, ImageUploader, Select, Spacing } from '../common';
import { ButtonGroupWrapper, SettingsTitle } from './styles';
import plugSmall from '@/assets/images/plus_small.png';
import { Homepee, Profile } from '@/lib/model';
import { SettingImageUploader } from './SettingImageUploader';
import { useEditProfilesMutation } from '@/hooks';

interface SettingTopContentProps {
  homepeeId: string;
  profile: Profile;
  homepee: Homepee;
}

export const SettingUserInfoContent = ({ homepeeId, profile, homepee }: SettingTopContentProps) => {
  const [profileData, setProfileData] = useState<Profile & Homepee>({
    birthday: '',
    name: '',
    personality: '',
    species: '',
    profileImageUrl: '',
    email: '',
    gender: 'MALE',
    title: '',
    gateImageUrl: '',
  });

  const [gateImage, setGateImage] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const editProfileMutation = useEditProfilesMutation();

  const onGateImageUrl = (imageUrl: string) => {
    setGateImage(imageUrl);
  };

  const onProfileImageChange = (imageUrl: string) => {
    setProfileImage(imageUrl);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const onCancel = (e: React.FormEvent) => {
    e.preventDefault();

    setProfileData({
      ...profile,
      ...homepee,
    });
  };

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    // 성 선택 안됐으면 male로 설정
    const { birthday, gender, name, species, personality, title } = profileData;
    editProfileMutation.mutate({
      homepeeId,
      profile: {
        birthday: birthday.replace('T', ' '),
        gender: gender || 'MALE',
        name,
        species,
        personality,
        profileImageUrl: profileImage,
      },
      homepee: {
        title,
        gateImageUrl: gateImage,
      },
    });
  };

  useEffect(() => {
    setProfileData({
      ...profile,
      ...homepee,
    });
    setGateImage(homepee.gateImageUrl);
    setProfileImage(profile.profileImageUrl);
  }, [profile, homepee]);

  return (
    <SettingsTopWrapper>
      <SettingsTitle>
        <div>프로필 변경</div>
        <Spacing vertical={8} />
        <Divider type="row" color="black" width={2}></Divider>
      </SettingsTitle>

      <SettingsTopContent>
        <form>
          <SettingImageUploader imageUrl={gateImage} type="gate" onChange={onGateImageUrl} />

          <section>
            <div>
              <SettingImageUploader imageUrl={profileImage} type="profile" onChange={onProfileImageChange} />
            </div>

            <div>
              <div>
                <Label>타이틀</Label>
                <Input name="title" onChange={onChange} value={profileData.title} />
              </div>
              <Spacing vertical={11} />
              <div>
                <Label htmlFor="profile_name">이름</Label>
                <Input id="profile_name" value={profileData.name} name="name" onChange={onChange} />
              </div>
              <Spacing vertical={11} />

              <div>
                <Label>종</Label>
                <Input name="species" onChange={onChange} value={profileData.species} />
              </div>
              <Spacing vertical={11} />

              <FlexBox>
                <Label>성별</Label>
                <GenderBox>
                  <Select
                    selectedIndex={profileData.gender || 'MALE'}
                    onChange={(value) => {
                      setProfileData({
                        ...profileData,
                        gender: value as 'MALE' | 'FEMALE',
                      });
                    }}
                    options={[
                      { index: 'MALE', text: '남' },
                      { index: 'FEMALE', text: '여' },
                    ]}
                  />
                </GenderBox>
              </FlexBox>
              <Spacing vertical={11} />

              <Label htmlFor="birthday">생년월일</Label>
              <Input id="birthday" name="birthday" type="date" onChange={onChange} value={profileData.birthday?.split('T')[0]} />
              <Spacing vertical={11} />

              <Label htmlFor="personality">성격</Label>
              <Input id="personality" name="personality" value={profileData.personality} onChange={onChange} />
            </div>
          </section>

          <Spacing vertical={16} />

          <ButtonGroupWrapper>
            <ButtonGroup
              buttons={[
                { text: '취소', color: 'GREY70', onClick: onCancel },
                { text: '완료', color: 'EMERALD100', onClick: onSave },
              ]}
              size="large"
            ></ButtonGroup>
          </ButtonGroupWrapper>
        </form>
      </SettingsTopContent>
    </SettingsTopWrapper>
  );
};

const SettingsTopWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SettingsTopContent = styled.section`
  width: 100%;
  margin-left: 25px;

  & form {
    display: flex;
    flex-direction: column;
  }

  & section {
    display: flex;
    margin-top: 15px;

    & > div + div {
      margin-left: 20px;
    }
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 124px;
  text-align: center;
`;

const Input = styled.input`
  width: 406px;
  height: 35px;
  padding: 0 12px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const GenderBox = styled.div`
  width: 406px;
  height: 35px;
  border: 1px solid black;
  padding: 0 12px;
`;
