interface Post {
  id: number;
  title: string;
  createdAt: string;
  imageUrl: string;
  content: string;
}

interface Member {
  id: number;
  name: string;
  profileImageUrl: string;
}

interface PopularPost {
  homepeeId: number;
  post: Post;
  member: Member;
}

export type GetPopularPostsResponse = PopularPost[];

interface SearchMemberInfo extends Member {
  homepeeId: number;
}

export type SearchMembersResponse = SearchMemberInfo[];

interface SearchPostInfo {
  memberName: string;
  postInfo: Post;
}

export type SearchPostsResponse = SearchPostInfo[];
