import cover from "../components/cover.jpg";
import Button from "../components/Button";
import Break from "../components/Break";
import BottomWarning from "../components/BottomWarning";
import Logo from "../components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid Email address")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "Password must be 6 characters or more")
				.max(18, "Password must be 18 characters or less")
				.required("Password is required"),
		}),
		onSubmit: async (values) => {
			try {
				const res = await axios.post(
					"https://server.praneethaylalvl1.workers.dev/api/v1/user/signin",

					values
				);

				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					toast.success("User Login", {
						theme: "dark",
						autoClose: 1200,
					});
					setTimeout(() => {
						navigate("/");
						window.location.reload();
					}, 2000);
				}
			} catch (e) {
				toast.warn("Email doesn't exist / Incorrect inputs", {
					theme: "dark",
					autoClose: 1200,
				});
			}
		},
	});

	const navigate = useNavigate();

	return (
		<section className="flex items-center justify-center min-h-screen ">
			<div className="flex max-w-3xl p-5 shadow-lg bg-slate-900 rounded-2xl">
				<div className="flex ">
					{/* form */}
					<div className="sm:w-1/2">
						<Logo></Logo>
						<p className="mt-4 mb-3 text-sm text-gray-300 ">
							Enter your credentials to access your account
						</p>
						<form
							onSubmit={formik.handleSubmit}
							className="flex flex-col gap-1"
							action="">
							<div className="flex flex-col">
								<label
									htmlFor="email"
									className="px-1 text-xs">
									Email
								</label>
								<input
									className="p-1 text-sm text-black border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="Email"
									name="email"
									placeholder="Enter your Last Name"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="password"
									className="px-1 text-xs">
									Password
								</label>
								<input
									className="p-1 text-black border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="Password"
									name="password"
									placeholder="Enter your Password"
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
							</div>
							<Button label={"Log In"}></Button>
						</form>
						<Break></Break>
						<BottomWarning
							label={"Don't have an account?"}
							buttonText={"Sign Up"}
							to={"/signup"}></BottomWarning>
					</div>

					{/* image */}
					<div className="hidden w-1/2 p-5 sm:block ">
						<img
							className="w-auto h-full rounded-2xl"
							src={cover}
						/>
					</div>
				</div>
			</div>
			<ToastContainer></ToastContainer>
		</section>
	);
}

export default Login;
