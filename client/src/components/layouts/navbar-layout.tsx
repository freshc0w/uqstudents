import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { Home } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Medium } from "@/components/typography";

type NavInfo = {
  name: string;
  to: string;
};

type Navigation = {
  review: NavInfo[];
  tutor: (NavInfo & { description: string })[];
  other: NavInfo[];
};

const Navbar = ({
  navigation,
  className,
}: {
  navigation: Navigation;
  className?: string;
}) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink to="/app" className="flex items-center space-x-2">
          <Home width="1.4rem" height="1.4rem" />
        </HoveredLink>
        <div className="flex justify-center space-x-5">
          <MenuItem setActive={setActive} active={active} item="Reviews">
            <div className="flex flex-col space-y-4 text-sm">
              {navigation.review.map((item) => (
                <HoveredLink key={item.name} to={item.to}>
                  <Medium>{item.name}</Medium>
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Tutors">
            <div className="  text-sm grid grid-cols-2 gap-10 p-2">
              {navigation.tutor.map((item) => (
                <ProductItem
                  key={item.name}
                  title={item.name}
                  href={item.to}
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  target="_blank"
                  description={item.description}
                />
              ))}
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Other">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="/profile">
                <Medium>Profile</Medium>
              </HoveredLink>
            </div>
          </MenuItem>
        </div>
        <div className="flex space-x-4">
          <ModeToggle />
        </div>
      </Menu>
    </div>
  );
};

export const NavbarLayout = ({ children }: { children: ReactNode }) => {
  const reviewNavigation = [
    { name: "Courses", to: "./courseReviews" },
    { name: "Lecturers", to: "./lecturerReviews" },
    { name: "Clubs & Societies", to: "./clubs" },
  ];
  const tutorNavigation = [
    {
      name: "EAIT",
      to: "https://www.eait.uq.edu.au/",
      description:
        "Engineering, Architecture and Information Technology tutors",
    },
    {
      name: "BEL",
      to: "https://bel.uq.edu.au/",
      description: "Business, Economics and Law tutors",
    },
  ];
  const otherNavigation = [{ name: "Profile", to: "/profile" }];
  return (
    <div>
      {" "}
      <Navbar
        navigation={{
          review: reviewNavigation,
          tutor: tutorNavigation,
          other: otherNavigation,
        }}
      />
      {children}
    </div>
  );
};
