import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Divider, Spacing } from '../common';
import { ButtonGroupWrapper, SettingsTitle } from './styles';
import plugSmall from '@/assets/images/plus_small.png';
import { Profile } from '@/lib/model';

interface SettingTopContentProps {
  profile: Profile;
}

export const SettingTopContent = ({ profile }: SettingTopContentProps) => {
  const [profileData, setProfileData] = useState<Profile>({
    birthday: '',
    name: '',
    personality: '',
    species: '',
    profileImageUrl: '',
    email: '',
    gender: 'MALE',
  });

  useEffect(() => {
    setProfileData(profile);
  }, [profile]);

  return (
    <SettingsTopWrapper>
      <SettingsTitle>
        <div>프로필 변경</div>
        <Spacing vertical={8} />
        <Divider type="row" color="black" width={2}></Divider>
      </SettingsTitle>

      <SettingsTopContent>
        <form>
          <SettingsCoverImage>
            <img src={plugSmall}></img>
          </SettingsCoverImage>

          <section>
            <div>
              <div>
                <img src={profileData.profileImageUrl || plugSmall}></img>
              </div>
            </div>

            <div>
              <div>
                <Label>타이틀</Label>
                <Input></Input>
              </div>
              <Spacing vertical={11} />
              <div>
                <Label htmlFor="profile_name">이름</Label>
                <Input id="profile_name" value={profileData.name} />
              </div>
              <Spacing vertical={11} />

              <div>
                <Label>종/나이/성별</Label>
                <Input></Input>
              </div>
              <Spacing vertical={11} />

              <div>
                <Label>소개글</Label>
                <Textarea></Textarea>
              </div>
            </div>
          </section>

          <Spacing vertical={16} />

          <ButtonGroupWrapper>
            <ButtonGroup
              buttons={[
                { text: '취소', color: 'GREY70' },
                { text: '완료', color: 'EMERALD100' },
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
  padding: 0 98px 22px 155px;
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

const SettingsCoverImage = styled.div`
  border: 1px dotted ${ColorMap.GREY70};
  width: 633px;
  height: 94px;
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

const Label = styled.label`
  display: inline-block;
  width: 124px;
  text-align: center;
`;

const Input = styled.input`
  width: 406px;
  height: 35px;
`;

const Textarea = styled.textarea`
  width: 406px;
  height: 110px;
  resize: none;
`;
