import { useQuery } from 'react-query';
import { QueryKey } from '../../lib/constants';
import { GetPopularPostsResponse, SearchMembersResponse, SearchPostsResponse } from '../../lib/model';
import { MainRepository } from '../../lib/repository';

export const useGetPopularPostsQuery = () => {
  return useQuery<GetPopularPostsResponse, Error>(QueryKey.GetPopularPosts, () => MainRepository.getPopularPosts());
};

export const useSearchMembersQuery = (memberName: string) => {
  return useQuery<SearchMembersResponse, Error>([QueryKey.SearchMembers, memberName], () => MainRepository.searchMembers(memberName));
};

export const useSearchPostsQuery = (postTitle: string) => {
  return useQuery<SearchPostsResponse, Error>([QueryKey.SearcgPosts, postTitle], () => MainRepository.searchPosts(postTitle));
};
