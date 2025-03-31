// import clsx from 'clsx';
// import { forwardRef, useEffect, useState } from 'react';
// import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react';
// import { Icon } from '@amsterdam/design-system-react';
// import { HeaderGridCellNarrowWindowOnly } from '@amsterdam/design-system-react';
// import { HeaderMenuIcon } from '@amsterdam/design-system-react';
// import { HeaderMenuLink } from '@amsterdam/design-system-react';
// import useIsAfterBreakpoint from '@amsterdam/design-system-react';

// const LogoLinkContent = ({ brandName }: { brandName?: string }) => (
//   <>
//     {brandName && (
//       <span aria-hidden="true" className="ams-header__brand-name">
//         {brandName}
//       </span>
//     )}
//   </>
// );

// export type CustomHeaderProps = {
//   brandName?: string;
//   logoLink?: string;
//   logoLinkTitle?: string;
//   menuButtonText?: string;
//   menuItems?: ReactNode;
//   navigationLabel?: string;
//   noMenuButtonOnWideWindow?: boolean;
// } & HTMLAttributes<HTMLElement>;

// const CustomHeaderRoot = forwardRef(
//   (
//     {
//       brandName,
//       children,
//       className,
//       logoLink = '/',
//       logoLinkTitle = 'Go to homepage',
//       menuButtonText = 'Menu',
//       menuItems,
//       navigationLabel = 'Main navigation',
//       noMenuButtonOnWideWindow,
//       ...restProps
//     }: CustomHeaderProps,
//     ref: ForwardedRef<HTMLElement>,
//   ) => {
//     const [open, setOpen] = useState(false);

//     const isWideWindow = useIsAfterBreakpoint('wide');

//     useEffect(() => {
//       if (noMenuButtonOnWideWindow && isWideWindow) {
//         setOpen(false);
//       }
//     }, [isWideWindow]);

//     return (
//       <header {...restProps} className={clsx('ams-header', className)} ref={ref}>
//         <a className="ams-header__logo-link" href={logoLink}>
//           <span className="ams-visually-hidden">{logoLinkTitle}</span>
//           <LogoLinkContent brandName={brandName} />
//         </a>
//         {(children || menuItems) && (
//           <nav aria-labelledby="primary-navigation" className="ams-header__navigation">
//             <h2 className="ams-visually-hidden" id="primary-navigation">
//               {navigationLabel}
//             </h2>

//             <div className="ams-header__logo-link ams-header__logo-link--hidden">
//               <LogoLinkContent brandName={brandName} />
//             </div>

//             <ul className="ams-header__menu">
//               {menuItems}
//               {children && (
//                 <li
//                   className={clsx(noMenuButtonOnWideWindow && 'ams-header__mega-menu-button-item--hide-on-wide-window')}
//                 >
//                   <button
//                     {...restProps}
//                     aria-controls="ams-mega-menu"
//                     aria-expanded={open}
//                     className="ams-header__mega-menu-button"
//                     onClick={() => setOpen(!open)}
//                     type="button"
//                   >
//                     <span className="ams-header__mega-menu-button-label">{menuButtonText}</span>
//                     <span aria-hidden="true" className="ams-header__mega-menu-button-hidden-label">
//                       {menuButtonText}
//                     </span>
//                     <Icon
//                       svg={
//                         <HeaderMenuIcon
//                           className={clsx('ams-header__menu-icon', open && 'ams-header__menu-icon--open')}
//                         />
//                       }
//                     />
//                   </button>
//                 </li>
//               )}
//             </ul>

//             {children && (
//               <div
//                 className={clsx('ams-header__mega-menu', !open && 'ams-header__mega-menu--closed')}
//                 id="ams-mega-menu"
//               >
//                 {children}
//               </div>
//             )}
//           </nav>
//         )}
//       </header>
//     );
//   },
// );

// CustomHeaderRoot.displayName = 'CustomHeader';

// export const CustomHeader = Object.assign(CustomHeaderRoot, {
//   GridCellNarrowWindowOnly: HeaderGridCellNarrowWindowOnly,
//   MenuLink: HeaderMenuLink,
// });