const updateAdminStatus = async (
	status: string,
	userId: string,
	token: string
) => {
	await fetch(`${import.meta.env.VITE_API}/users/admin-status`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			status,
			userId
		})
	})
}

export { updateAdminStatus }
