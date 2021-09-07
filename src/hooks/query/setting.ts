import { useQuery, useMutation } from 'react-query';
import { QueryKey } from '../../lib/constants';
import { EditSettingRequest, EditSettingResponse, EditTabsRequest, GetSettingResponse } from '../../lib/model';
import { SettingRepository } from '../../lib/repository';

export const useGetSettingsQuery = (homepeeId: string) => {
  return useQuery<GetSettingResponse, Error>([QueryKey.GetSettingData, homepeeId], () => SettingRepository.getSettings({ homepeeId }));
};

export const useEditProfilesQuery = () => {
  return useMutation<EditSettingResponse, Error, EditSettingRequest>(({ homepeeId, profile, tabs }) =>
    SettingRepository.editProfiles({ homepeeId, profile, tabs }),
  );
};

export const useEditTabsMutation = () => {
  return useMutation<void, Error, EditTabsRequest>(({ homepeeId, tabs }) => SettingRepository.editTabs({ homepeeId, tabs }));
};
