import { Outlet } from "@remix-run/react"
export default function UsersRoute() {
	return (
			<div className="m-10">
				<h1 className="text-6xl">Users layout</h1> 
				<hr />
				<div className="p-10">
				<Outlet />
				</div>
			</div>
	)
}
