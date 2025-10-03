import React from 'react';
import Image from 'next/image';

interface IconProps {
  className?: string;
}

export const GridIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/grid.svg" alt="Grid Icon" width={24} height={24} className={className} />;
export const CalenderIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/calendar.svg" alt="Calendar Icon" width={24} height={24} className={className} />;
export const UserCircleIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/user-circle.svg" alt="User Circle Icon" width={24} height={24} className={className} />;
export const ListIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/list.svg" alt="List Icon" width={24} height={24} className={className} />;
export const TableIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/table.svg" alt="Table Icon" width={24} height={24} className={className} />;
export const PageIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/page.svg" alt="Page Icon" width={24} height={24} className={className} />;
export const PieChartIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/pie-chart.svg" alt="Pie Chart Icon" width={24} height={24} className={className} />;
export const BoxCubeIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/box-cube.svg" alt="Box Cube Icon" width={24} height={24} className={className} />;
export const PlugInIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/plug-in.svg" alt="Plug In Icon" width={24} height={24} className={className} />;
export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/chevron-down.svg" alt="Chevron Down Icon" width={24} height={24} className={className} />;
export const HorizontaLDots: React.FC<IconProps> = ({ className }) => <Image src="/icons/horizontal-dots.svg" alt="Horizontal Dots Icon" width={24} height={24} className={className} />;
export const EyeIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/eye.svg" alt="Eye Icon" width={24} height={24} className={className} />;
export const EyeCloseIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/eye-close.svg" alt="Eye Close Icon" width={24} height={24} className={className} />;
export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => <Image src="/icons/chevron-left.svg" alt="Chevron Left Icon" width={24} height={24} className={className} />;
