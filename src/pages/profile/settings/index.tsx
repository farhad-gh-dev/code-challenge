import { getUserContactChannels } from "api/user";
import SiteLayout from "components/Layouts/SiteLayout";
import { ContactChannels } from "features/ContactChannels";
import { UserSettings } from "types/user";

interface Props {
  userSettingsData: UserSettings;
}

function Settings({ userSettingsData }: Props) {
  return (
    <SiteLayout>
      <ContactChannels contactsData={userSettingsData.contactChannels} />
    </SiteLayout>
  );
}

export async function getServerSideProps() {
  const userContactChannels = getUserContactChannels();

  return {
    props: {
      userSettingsData: {
        contactChannels: userContactChannels,
      },
    }, // will be passed to the page component as props
  };
}

export default Settings;
