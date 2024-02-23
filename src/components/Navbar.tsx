import { useTheme } from "@/hooks/useTheme"
import { GiSpellBook } from "react-icons/gi"
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2"
import { SiGithub, SiYoutube } from "react-icons/si"

export function Navbar() {
	return (
		<header className="sticky top-0 z-10 w-full border-b bg-background">
			<div className="flex h-16 items-center px-4 sm:px-8 lg:px-44">
				<div className="mx-auto w-full max-w-3xl space-y-20">
					<div className="flex justify-between">
						<div className="flex flex-1 items-center justify-start">
							<a href="/" className="size-10 p-2 text-primary">
								<GiSpellBook className="size-full" />
							</a>
						</div>
						<div className="flex flex-1 items-center justify-end">
							<nav className="flex items-center space-x-1">
								<ThemeToggle />
								<a
									href="youtube.com"
									target="_blank"
									className="size-10 p-2 text-primary hover:text-[#ff0000] dark:hover:text-[#ff0000]"
								>
									<SiYoutube className="h-full w-full" />
								</a>
								<a
									href="github.com"
									target="_blank"
									className="size-10 p-2 text-primary hover:text-[#4078c0] dark:hover:text-[#4078c0]"
								>
									<SiGithub className="h-full w-full" />
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

function ThemeToggle() {
	const { isDarkMode, toggleDarkMode } = useTheme()

	return (
		<button
			className="size-10 p-2 hover:text-amber-500 dark:hover:text-amber-400"
			onClick={toggleDarkMode}
		>
			{isDarkMode ? (
				<HiMiniMoon className="h-full w-full" />
			) : (
				<HiMiniSun className="h-full w-full" />
			)}
		</button>
	)
}
