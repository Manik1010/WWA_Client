import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = {
        status: 404,
        statusText: 'Not Found',
        message: 'The requested page could not be found.',
      };

  return (
    <div className='mx-auto text-center shadow-2xl border-2 border-red-400 rounded-md p-6 w-64 md:w-96 my-10 md:my-10'>
      <figure className='mx-auto w-10 md:w-20'>
        <FaWindowClose className='md:w-30 md:h-30 h-20 w-20 text-red-500'></FaWindowClose>
      </figure>
      <h1 className='font-bold text-4xl'>{error.status}</h1>
      <p className='font-medium text-2xl my-2 text-red-700'>{error.statusText}</p>
      <p className='text-xl'>{error.message}</p>
      <Link to='/'>
        <button className='btn btn-outline btn-primary mt-3'>Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;