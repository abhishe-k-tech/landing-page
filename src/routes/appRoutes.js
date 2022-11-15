import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../components/layout/layout'
import Home from '../pages/home/home'
import Population from '../pages/population/population'

function AppRoute() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/population" element={<Population />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Suspense>
	)
}

export default AppRoute
