
import React, { useState } from 'react';
import { data } from '../utils/data';
import './Carrousel.css';


export const Carrousel = () => {

	const [page, setPage] = useState({
		from: 0,
		to: 3
	})

	console.log(page)

	const handleNext = () => {
		if (page.to < data.length) {
			setPage((prev) => {
				return {
					from: prev.from + 4,
					to: prev.to + 3
				}
			})
		}
	}

	const handlePrev = () => {
		if (page.from > 0) {
			setPage((prev) => {
				return {
					from: prev.from - 4,
					to: prev.to - 3
				}
			})
		}
	}


	return (
		<>
			<div className="projects">
				<h2 className="light">My Projects</h2>
				<div className="cards">
					{
						data.map((project, index) => {

							if (project.id <= page.to && project.id >= page.from) {
								return (
									<div className="card2" key={index}>
										<img src={project.img} alt="" className="imgProject" />
										<h3 className=''>{project.name}</h3>
										<p className='parr'>{project.decription}</p>
										<div className="tecs">
											{
												project.tech.map((tec, index) => {
													if(tec === 'coin.png') {
														return (
															<img src={`${tec}`} alt="" className='tec coin'/>
														)
													}
													return (
															<img src={`${tec}`} alt="" className='tec'/>
													)
												})
											}
										</div>
										<button className='btnSee'>See on github</button>
									</div>
								)	
							}			
						})
					}
				</div>

				<div className="pageSelector">
					<img src="arrowright2.svg" alt="" className='arr' onClick={handlePrev}/>
					{
						page.from === 0 ? <div className="page selectedPage"></div> : <div className="page"></div>
					}
					{
						page.from === 4 ? <div className="page selectedPage"></div> : <div className="page"></div>
					}
					{
						page.from === 8 ? <div className="page selectedPage"></div> : <div className="page"></div>
					}
					<img src="arrowright2.svg" alt="" className='arr arrD' onClick={handleNext}/>
				</div>
			</div>
		
		</>
	)
}	



 
