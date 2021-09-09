import { useQuery, useMutation } from 'react-query';
import { QueryKey } from '../../lib/constants';
import { EditProfileRequest, EditProfileResponse, EditTabsRequest, GetSettingResponse } from '../../lib/model';
import { SettingRepository } from '../../lib/repository';

export const useGetSettingsQuery = (homepeeId: string) => {
  return useQuery<GetSettingResponse, Error>([QueryKey.GetSettingData, homepeeId], () => SettingRepository.getSettings({ homepeeId }));
};

export const useEditProfilesMutation = () => {
  return useMutation<EditProfileResponse, Error, EditProfileRequest>(({ homepeeId, profile, homepee }) =>
    SettingRepository.editProfiles({ homepeeId, profile, homepee }),
  );
};

export const useEditTabsMutation = () => {
  return useMutation<void, Error, EditTabsRequest>(({ homepeeId, tabs }) => SettingRepository.editTabs({ homepeeId, tabs }));
};
