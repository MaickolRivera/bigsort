type IconWhiteModeProps = {
    size?: number;
    className?: string;
}

export default function IconWhiteMode({size = 16, className=""}: IconWhiteModeProps){
    return(
        <svg 
        width={size} 
        height={size}
        viewBox="0 0 29 29" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
            <path d="M14.5 1V2.5M14.5 26.5V28M28 14.5H26.5M2.5 14.5H1M24.046 24.046L22.9855 22.9855M6.0145 6.0145L4.954 4.954M24.046 4.954L22.9855 6.0145M6.0145 22.9855L4.954 24.046M20.5 14.5C20.5 16.0913 19.8679 17.6174 18.7426 18.7426C17.6174 19.8679 16.0913 20.5 14.5 20.5C12.9087 20.5 11.3826 19.8679 10.2574 18.7426C9.13214 17.6174 8.5 16.0913 8.5 14.5C8.5 12.9087 9.13214 11.3826 10.2574 10.2574C11.3826 9.13214 12.9087 8.5 14.5 8.5C16.0913 8.5 17.6174 9.13214 18.7426 10.2574C19.8679 11.3826 20.5 12.9087 20.5 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}