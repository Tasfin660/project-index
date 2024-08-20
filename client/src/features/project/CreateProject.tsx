import { yupResolver } from '@hookform/resolvers/yup'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { BiSolidAddToQueue } from 'react-icons/bi'
import * as yup from 'yup'
import { createProject } from '../../services/apiProjects'
import { Project } from '../../types/projectTypes'
import {
	ToastError,
	ToastLoading,
	toastReset,
	ToastSuccess
} from '../../ui/ToastElements'
import { useEffect } from 'react'

const schema = yup.object().shape({
	title: yup.string().min(3).max(48).required(),
	category: yup.string().required(),
	description: yup.string().min(30).max(300).required()
})

const CreateProject = () => {
	const [cookies] = useCookies(['jwt'])
	const {
		register: reg,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ resolver: yupResolver(schema) })

	const onSubmit = async (data: Project) => {
		toast.dismiss()
		await toast.promise(
			createProject(data, cookies.jwt),
			{
				loading: <ToastLoading msg="Creating..." />,
				success: ({ message }) => <ToastSuccess msg={message} />,
				error: err => <ToastError err={err} />
			},
			toastReset
		)
		reset()
	}

	useEffect(() => {
		Object.keys(errors).length > 0 &&
			toast(
				<ToastError
					err={
						(errors?.title?.message as string) ||
						(errors?.category?.message as string) ||
						(errors?.description?.message as string)
					}
				/>,
				toastReset
			)
	}, [errors])

	return (
		<form
			className="blue-bg flex w-[400px] flex-col items-center gap-6 p-6 text-sm"
			onSubmit={handleSubmit(onSubmit)}>
			<div className="flex items-center gap-2 text-lg font-medium">
				<BiSolidAddToQueue />
				<h2>Create New Project</h2>
			</div>
			<input
				type="text"
				placeholder="Title"
				className="rounded-md border border-clr-primary p-3"
				{...reg('title')}
			/>
			<select
				className="rounded-md border border-clr-primary p-3"
				{...reg('category')}>
				<option value="e-commerce-platforms" className="bg-clr-gray-light">
					E-commerce Platforms
				</option>
				<option value="social-networks" className="bg-clr-gray-light">
					Social Networks
				</option>
				<option value="educational-tools" className="bg-clr-gray-light">
					Educational Tools
				</option>
				<option value="portfolio-websites" className="bg-clr-gray-light">
					Portfolio Websites
				</option>
				<option value="productivity-apps" className="bg-clr-gray-light">
					Productivity Apps
				</option>
				<option value="content-management" className="bg-clr-gray-light">
					Content Management
				</option>
				<option value="data-visualization" className="bg-clr-gray-light">
					Data Visualization
				</option>
				<option value="entertainment-platforms" className="bg-clr-gray-light">
					Entertainment Platforms
				</option>
				<option value="health-and-fitness" className="bg-clr-gray-light">
					Health and Fitness
				</option>
				<option value="finance-management" className="bg-clr-gray-light">
					Finance Management
				</option>
				<option value="booking-systems" className="bg-clr-gray-light">
					Booking Systems
				</option>
				<option value="social-good" className="bg-clr-gray-light">
					Social Good
				</option>
				<option value="personalization-engines" className="bg-clr-gray-light">
					Personalization Engines
				</option>
				<option value="ai-ml-applications" className="bg-clr-gray-light">
					AI-ML Applications
				</option>
				<option value="api-integrations/" className="bg-clr-gray-light">
					API Integrations
				</option>
			</select>
			<textarea
				placeholder="About this project..."
				className="h-[150px] rounded-md border border-clr-primary p-3"
				{...reg('description')}
			/>
			<button className="rounded-lg bg-clr-primary-grad px-2 py-1">
				Submit
			</button>
			<Toaster />
		</form>
	)
}

export default CreateProject
