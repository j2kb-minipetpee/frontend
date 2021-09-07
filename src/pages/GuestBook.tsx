import { GuestBookInput } from '@/components/GuestBook/GuestBookInput';
import { Book } from '@/components/GuestBook/Book';

import { useAuth } from '@/hooks';
import { useGetGuestBookQuery } from '@/hooks/query/guestBook';
import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const GuestBookPage = () => {
  const { id, homepeeId } = useAuth();
  const { id: targetHomepeeId } = useParams<{ id: string }>();

  const getGuestBookQuery = useGetGuestBookQuery(Number(targetHomepeeId));

  return (
    <HomepeeLayout>
      <GuestBookPageContainer>
        <GuestBookInput memberId={id} homepeeId={targetHomepeeId} />

        {getGuestBookQuery.data && (
          <ul>
            {getGuestBookQuery.data.pages
              .flatMap((value) => value.content)
              .map((book) => (
                <Book
                  key={book.id}
                  id={String(book.id)}
                  homepeeId={targetHomepeeId}
                  memberId={book.member.id}
                  content={book.content}
                  createdAt={book.createdAt}
                  name={book.member.name}
                  profileImage={book.member.profileImageUrl}
                  isHomepeeHost={homepeeId === Number(targetHomepeeId)}
                  isMine={id === book.member.id}
                />
              ))}
          </ul>
        )}
      </GuestBookPageContainer>
    </HomepeeLayout>
  );
};

const GuestBookPageContainer = styled.section`
  margin-top: 86px;
  padding: 0 367px;
`;
