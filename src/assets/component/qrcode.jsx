export function QRCodeComponent(){
    return (
        <>
           <section className="flex items-center justify-center min-h-screen ">
            <div className="w-80 flex flex-col items-center justify-center bg-white px-4 py-4 rounded-lg shadow-lg">
                <img src="./images/image-qr-code.png" alt="QR Code" className="w-80 h-80 mb-6 rounded-lg shadow-lg" />
                <h1 className="text-2xl font-bold mb-2">Improve your front-end skills by building projects</h1>
                <p className="font-normal text-gray-600 mb-6">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                </p>
            </div>
        </section>
        </>
    )
}