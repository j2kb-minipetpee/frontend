import { GuestNoteInput } from '@/components/Guestnote/GuestNoteInput';
import { Note } from '@/components/Guestnote/Note';
import { useAuth } from '@/hooks';
import { useGetGuestNoteQuery } from '@/hooks/query/guestNote';
import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const GuestNotePage = () => {
  const { id, name, homepeeId } = useAuth();
  const { id: targetHomepeeId } = useParams<{ id: string }>();

  const getGuestNoteQuery = useGetGuestNoteQuery(Number(targetHomepeeId));

  return (
    <HomepeeLayout>
      <GuestNotePageContainer>
        <GuestNoteInput memberId={id} homepeeId={targetHomepeeId} />

        {getGuestNoteQuery.data && (
          <ul>
            {getGuestNoteQuery.data.pages
              .flatMap((value) => value.content)
              .map((note) => (
                <Note
                  key={note.id}
                  id={String(note.id)}
                  homepeeId={targetHomepeeId}
                  memberId={note.member.id}
                  content={note.content}
                  createdAt={note.createdAt}
                  name={note.member.name}
                  profileImage={note.member.profileImageUrl}
                  isHomepeeHost={homepeeId === Number(targetHomepeeId)}
                  isMine={id === note.member.id}
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
