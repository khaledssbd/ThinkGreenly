import { getMemberOwnIdeas } from '@/services/Idea';
import MemberIdeasTable from './MemberIdeasTable';

const MemberAllIdeasModule = async () => {
  const { data: ideas } = await getMemberOwnIdeas();

  return (
    <div>
      <MemberIdeasTable ideas={ideas} />
    </div>
  );
};

export default MemberAllIdeasModule;
