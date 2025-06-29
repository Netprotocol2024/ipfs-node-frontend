// import { useState } from 'react';

// import { motion } from 'framer-motion';
// import { AlignLeft, X } from 'lucide-react';
// import { NavLink } from 'react-router-dom';

// import { Button } from '@/components/ui/button';
// import { navItems } from '@/configs/nav/nav-items';
// import { MouseEvent } from '@/types';

// const menuVariants = {
//   open: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100,
//       damping: 20,
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
//   closed: {
//     x: '-100%',
//     opacity: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 100,
//       damping: 20,
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };

// const itemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: 'spring', stiffness: 100, damping: 20 },
//   },
//   closed: {
//     opacity: 0,
//     y: 50,
//     scale: 0.8,
//     transition: { type: 'spring', stiffness: 100, damping: 20 },
//   },
// };

// export const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = (e: MouseEvent) => {
//     e.stopPropagation();
//     setIsOpen((prev) => !prev);
//   };

//   const handleNavLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="lg:hidden"
//         onClick={toggleMenu}
//       >
//         <AlignLeft className="h-6 w-6 md:h-8 md:w-8" />
//       </Button>
//       <motion.div
//         initial={false}
//         animate={isOpen ? 'open' : 'closed'}
//         variants={menuVariants}
//         className="fixed z-10 top-0 left-0 h-screen w-full bg-opacity-50 bg-background/90 backdrop-blur lg:hidden"
//       >
//         <Button
//           size="icon"
//           onClick={toggleMenu}
//           className="absolute top-4 right-4 z-10"
//         >
//           <X size={32} />
//         </Button>

//         <motion.ul
//           variants={menuVariants}
//           className="flex-1 flex items-center justify-center flex-col h-full w-full text-center"
//         >
//           {navItems.map((item, i) => (
//             <motion.li key={i} className="w-full" variants={itemVariants}>
//               <NavLink
//                 to={item.path}
//                 onClick={handleNavLinkClick}
//                 className={({ isActive }) =>
//                   `text-2xl py-6 transition-all hover:bg-muted w-full block ${
//                     isActive ? 'text-primary bg-muted' : 'text-foreground'
//                   }`
//                 }
//               >
//                 {item.title} 
//               </NavLink>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </motion.div>
//     </>
//   );
// };

