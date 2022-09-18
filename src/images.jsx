

export const Close = ( {className} ) => {
  return (
    <svg className={className ? `icon ${className}`: "icon"} xmlns="http://www.w3.org/2000/svg" width="19.092" height="19.092" viewBox="0 0 19.092 19.092">
    <g id="icon-close" transform="translate(-0.454 -0.954)">
      <path id="Path_1" data-name="Path 1" d="M2.575.954l16.97,16.97-2.12,2.122L.455,3.076Z" fill="#d0d6f9" fillRule="evenodd"/>
      <path id="Path_2" data-name="Path 2" d="M.454,17.925,17.424.955l2.122,2.12L2.576,20.045Z" fill="#d0d6f9" fillRule="evenodd"/>
    </g>
  </svg>
  
  )
}


export const Menu = ({className}) => {
  return (
    <svg className={className ? `icon ${className}`: "icon"} id="icon-hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21">
    <path id="Path_3" data-name="Path 3" d="M0,0H24V3H0ZM0,9H24v3H0Zm0,9H24v3H0Z" fill="#d0d6f9" fillRule="evenodd"/>
  </svg>
  
  )
}



export function Logo() {
    return (
        <svg className="logo" id="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="24" cy="24" r="24" fill="#fff" />
            <path id="Path_4" data-name="Path 4" d="M24,0Q24,24,0,24q23.577.171,24,24,0-24,24-24Q24,24,24,0Z" fill="#0b0d17" fillRule="evenodd" />
        </svg>

    )
}
