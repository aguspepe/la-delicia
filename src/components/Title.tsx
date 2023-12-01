export const Title = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='grid'>
      <h2 className='text-5xl font-bold text-center'> {children}</h2>
      <div className='text-center mb-10'>
        <span className='inline-block w-1 h-1 rounded-full bg-red-500 mr-1'></span>
        <span className='inline-block w-3 h-1 rounded-full bg-red-500 mr-1'></span>
        <span className='inline-block w-40 h-1 rounded-full bg-red-500'></span>
        <span className='inline-block w-3 h-1 rounded-full bg-red-500 ml-1'></span>
        <span className='inline-block w-1 h-1 rounded-full bg-red-500 ml-1'></span>
      </div>
    </div>
  )
}
