export default function Error() {
    return (
        <div className="block m-auto shadow-md w-3/5 mt-12 p-6 rounded-md bg-white">
            <h1 className='font-bold text-3xl'>Whoops,</h1>
            <h3 className="font-regular text-lg mt-2">Looks like this page does not exist or you have to <a href="/login" className="text-blue">login</a></h3>
            <img src="/src/assets/sleepingLion.png" alt="" className="drop-shadow-md flex m-auto mt-12"/>
        </div>
    )
}