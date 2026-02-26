
export default function HeaderText(
    {
        children, 
    }: Readonly<{
        children: React.ReactNode; 
    }>
) {
    return(
        <p className=" text-2xl lg:text-4xl font-black capitalize " >
            {children}
        </p>
    )
}