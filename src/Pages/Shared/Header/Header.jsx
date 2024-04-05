import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center text-xl my-3'>
           <h2 className='text-[#444444] font-UnifrakturCook text-6xl font-semibold'>The Morning Riser </h2>
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;