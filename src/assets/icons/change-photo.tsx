import { memo } from 'react'

const Icon = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <g>
        <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
          <path d="M9 11.844a2.489 2.489 0 100-4.977 2.489 2.489 0 000 4.977zm0-.622A1.867 1.867 0 109 7.49a1.867 1.867 0 000 3.733z"></path>
          <path d="M11.997 4.378c-.746-.686-1.433-1.245-3.02-1.245-1.586 0-2.272.56-3.018 1.245h-2.56c-1.03 0-1.866.835-1.866 1.866v6.223c0 1.03.836 1.866 1.867 1.866h11.2c1.03 0 1.867-.835 1.867-1.866V6.244c0-1.03-.836-1.866-1.867-1.866h-2.603zM11.753 5l-.065-.06a31.945 31.945 0 00-.18-.166 5.412 5.412 0 00-.665-.537c-.422-.278-.951-.481-1.865-.481s-1.443.203-1.865.48a5.413 5.413 0 00-.666.538l-.18.166-.065.06H3.4c-.687 0-1.245.557-1.245 1.244v6.223c0 .687.558 1.244 1.245 1.244h11.2c.687 0 1.244-.557 1.244-1.244V6.244C15.844 5.557 15.287 5 14.6 5h-2.847z"></path>
        </g>
      </g>
    </svg>
  )
}

export const ChangePhoto = memo(Icon)