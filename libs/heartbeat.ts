export const heartbeatServer = async (serverAddress: string) => {
	// Get the server manifest.

	try {
		const response = await fetch(`${serverAddress}/api/`);

		if (!response.ok) {
			return {
				status: false,
				message: "Server is not responding.",
			};
		}

		if (response.status === 200) {
			if (response.headers.get("content-type") !== "application/json") {
				return {
					status: false,
					message:
						"This is not a server running compatible Harmoni software. (Could not understand expected response)",
				};
			}
			const data = await response.json();

			if (data.services) {
				if (data.services.mobile) {
					return {
						status: true,
						message: "Server is online.",
					};
				} else {
					return {
						status: false,
						message: "Server does not support mobile devices.",
					};
				}
			} else {
				return {
					status: false,
					message: "External services is not enabled on the server.",
				};
			}
		} else {
			return {
				status: false,
				message:
					"This is not a server running compatible Harmoni software. (Got unexpected status code)",
			};
		}
	} catch (e) {
		return {
			status: false,
			message: "Server is not responding.",
		};
	}
};
