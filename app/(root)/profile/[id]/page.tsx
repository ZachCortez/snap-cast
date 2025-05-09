import Header from "@/components/Header";

const ProfilePage = async ({ params, searchParams }: ParamsWithSearch) => {
    const { id } = await params;

    return (
        <div className="text-2xl font-karla">
            <Header subHeader="Zach.Cortez@icloud.com" title="Zach Cortez" userImg="/assets/images/dummy.jpg" />

            USER ID: {id}</div>
    );
};

export default ProfilePage;