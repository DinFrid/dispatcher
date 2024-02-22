export interface DropdownArrowProps {
  width ?: number;
  height ?: number;
  color : string;
}

const DropdownArrowIcon: React.FC<DropdownArrowProps> = ({ width = 18, height = 16, color }) => (
  <svg width={width} height={height} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon/dropdown">
<path id="Forward" d="M16.3334 5.33334L9.00004 12.6667L1.66671 5.33334" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
);

export default DropdownArrowIcon;
