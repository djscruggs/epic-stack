import { Outlet } from "@remix-run/react"
export default function AdminRoute() {
	return (
			<div className="m-10">
				<h1 className="text-6xl">Admin layout</h1> 
				<hr />
				<div className="p-10">
				<Outlet />
				</div>
			</div>
	)
}
