import Container from './layout/Container'
import scarecrow from './assets/scarecrow.png';

function App() {

  return (
    <div className='App pt-[20px] pb-[24px] pl-[24px] max-w-[1024px]'>
      <div className='h-6 font-bold text-2xl font-sans tracking-[-0.08em] uppercase'>404 not found</div>
      <Container>
        <div className='flex flex-col items-center pt-[64px] lg:pt-0 lg:flex-row lg:items-center lg:justify-center'>
          <img src={scarecrow}
            className='w-[286px]'
          />
          <div className='w-full lg:pl-[119px]'>
            <p className='text-5xl text-[#333333] pt-[60px] pb-[30px] w-[350px] font-bold font-mono tracking-[-0.035em]'>
              I have bad news for you
            </p> 

            <p className='text-lg text-[#4F4F4F] w-[219px] font-normal tracking-[-0.035em]'>
              The page you are looking for might be removed or is temporarily unavailable
            </p>
          <div className='pt-[66px] w-full'>
            <button className='bg-[#333333] text-[#FFFFFF] px-[43px] py-[24px] racking-[-0.035em] font-bold text-sm uppercase'>
              Back to homepage
            </button>
          </div>
          </div>
        </div>
      </Container>
      <div className='h-6 font-bold text-[#BDBDBD] text-xs font-serif lg:text-center'>created by Consuelo Anguita - devChallenges.io</div>
    </div>
  )
}

export default App
