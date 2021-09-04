import { GuestNoteInput } from '@/components/Guestnote/GuestNoteInput';
import { Note } from '@/components/Guestnote/Note';
import { useAuth } from '@/hooks';
import { useGetGuestNoteQuery } from '@/hooks/query/guestNote';
import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const GuestNotePage = () => {
  const { id, name } = useAuth();
  const { id: homepeeId } = useParams<{ id: string }>();

  const getGuestNoteQuery = useGetGuestNoteQuery(Number(homepeeId));

  return (
    <HomepeeLayout>
      <GuestNotePageContainer>
        <GuestNoteInput memberId={id} homepeeId={homepeeId} />

        {getGuestNoteQuery.data && (
          <ul>
            {getGuestNoteQuery.data.pages
              .flatMap((value) => value.content)
              .map((note) => (
                <Note
                  key={note.id}
                  content={note.content}
                  createdAt={note.createdAt}
                  name={note.member.name}
                  profileImage={note.member.profileImageUrl}
                  visible={note.visible}
                />
              ))}
          </ul>
        )}
      </GuestNotePageContainer>
    </HomepeeLayout>
  );
};

const GuestNotePageContainer = styled.section`
  margin-top: 86px;
  padding: 0 367px;
`;
