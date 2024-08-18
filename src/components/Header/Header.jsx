import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between bg-gray-100 p-4 border-b-2'>
            <h1 className="text-3xl font-bold">knowledge Cafe</h1>
            <img src= {profile} alt="" />
        </div>
    );
};

export default Header;