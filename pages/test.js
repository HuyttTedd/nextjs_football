import Navigationbar from '../components/header/Navigationbar';
import Avatar from '../components/profile/Avatar';
import Tabs from '../components/profile/Tabs';
import ProfileBody from '../components/profile/ProfileBody';

function BasicExample() {
  return (
    <div>
        <Navigationbar/>
        <Avatar />
        <ProfileBody />
    </div>
  );
}

export default BasicExample;