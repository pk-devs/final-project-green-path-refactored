import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'

export const pathSlice = createSlice ({
    name: "path",
    initialState: {
        lastAddedPathId: null,
        items: [
            {
                id: uuidv4(),
                question: "How to build solar panels on villas?",
                description: "Installing solar panels is the first step toward a greener future. In fact, by doing so, you are already in line with the UN's sustainable development goals of clean energy and climate action.",
                tags: ["Renewable energy"],
                subPaths: [],
                resources: [
                    {
                        id: uuidv4(),
                        title: "What to consider",
                        link: "https://victoriarealtors.in/blog/solar-panels-for-villas-things-to-consider-before-installing/",
                        comment: "Read about what to consider before installing solar panels",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "How to build solar panels",
                        link: "https://www.instructables.com/How-To-Build-A-Solar-Panel/",
                        comment: "Read about how you actually build solar panels yourself.",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "Step-by-step guide",
                        link: "https://www.ecoideaz.com/expert-corner/step-by-step-guide-on-how-to-set-up-solar-power-at-home",
                        comment: "Step-by-step guide on how your install solar panels on your villa.",
                        completed: false,
                        subPaths: []
                    }
                ]
            },
            {
                id: uuidv4(),
                question: "How to improve air quality?",
                description: "One person can make a difference in the air quality. Reducing the amount of dangerous emissions benefits our outdoor air. Follow the path and see how you can help improve air quality in your neighbourhood.",
                tags: ["atmosphere"],
                subPaths: [],
                resources: [
                    {
                        id: uuidv4(),
                        title: "Drive your car less.",
                        link: "",
                        comment: "Instead of driving every day to work, try carpooling, bicycling, using public transportation or walk, if possible.",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "Reduce gas consumption.",
                        link: "",
                        comment: "Plan ahead and consolidate errands and trips to reduce the amount of miles driven. When purchasing a new vehicle, consider vehicles that run efficiently and provide the best gas mileage.",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "Turn off your engine.",
                        link: "",
                        comment: "An idling vehicle creates air pollution. Turn off your engine while waiting in drive-through lines and especially school or daycare drop-off zones.",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "Fueling your car matters",
                        link: "",
                        comment: "Fuel your vehicle in early or late hours. In the heat of the summer, it helps reduce air pollution if vehicles are refueled in the early or late hours of the day rather than mid-day with the temperatures are the highest.",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "Don't burn your trash.",
                        link: "https://lnt.org/the-burning-question-why-not-burn-trash/",
                        comment: "Burning your household trash can affect air pollution. Learn more by reading the link provided.",
                        completed: false,
                        subPaths: []
                    },
                    {
                        id: uuidv4(),
                        title: "Plant and care for trees.",
                        link: "",
                        comment: "Trees filter pollutants and absorb carbon dioxide. Trees also release oxygen into the atmosphere and help cool our homes.",
                        completed: false,
                        subPaths: []
                    },
                ]
            },
            {
                id: uuidv4(),
                question: "Combat Sea Level Rise, what can I do?",
                description: "Sea levels are rising and that climate change is one of the primary culprits. As we examine the possibility of flooding, erosion of our coastlines and endangered livelihoods of our coastal communities, we recognize that combating and adapting to rising sea levels as soon as possible is a must.",
                tags: ["Ocean"],
                subPaths: [],
                resources: [
                    {
                        id: uuidv4(),
                        title: "Few tips",
                        link: "https://www.cleanenergy.org/blog/four-ways-your-actions-can-help-combat-sea-level-rise/",
                        comment: "4 tips on how you can help fight the rising sea levels.",
                        completed: false,
                        subPaths: []
                    },
                ]
            },
            {
                id: uuidv4(),
                question: "Transforming agriculture to combat climate change?",
                description: "Climate change threatens food security and our ability to achieve sustainable development. Agriculture both suffers from climate change but also contributes to it as a significant amount of greenhouse gas emissions come from the agrifood sector.",
                tags: [""],
                subPaths: [],
                resources: [
                    {
                        id: uuidv4(),
                        title: "IFPRI Global Food Policy Report 2022",
                        link: "https://www.ifpri.org/blog/ifpri-global-food-policy-report-2022-accelerating-food-systems-transformation-combat-climate",
                        comment: "Accelerating food systems transformation to combat climate change.",
                        completed: false,
                        subPaths: []
                    },
                ]
            }
        ]
    },
    reducers: {
        addPath: (state, action) => {
            const newPath = {
                id: uuidv4(),
                question: action.payload.question,
                description: action.payload.description,
                tags: action.payload.tag ? [action.payload.tag] : [],
                subPaths: [],
                resources: []
            }
            state.items.push(newPath)
            state.lastAddedPathId = newPath.id
        }, 
        resetLastAddedPathId: (state) => {
            state.lastAddedPathId = null
        },
        addResource: (state, action) => {
            const pathIndex = state.items.findIndex(path => path.id === action.payload.pathId)
            if (pathIndex !== -1) {
                const newResource = {
                    id: uuidv4(),
                    title: action.payload.title,
                    link: action.payload.link,
                    comment: action.payload.comment,
                    completed: false,
                    subPaths: []                    
                }
                
                const newResources = [...state.items[pathIndex].resources, newResource]
                
                state.items[pathIndex] = {
                    ...state.items[pathIndex],
                    resources: newResources
                }
            }
        },
        removeResource: (state, action) => {
            const { pathId, resourceId} = action.payload
            const pathIndex = state.items.findIndex(path => path.id === pathId)
            if(pathIndex !== -1) {
                state.items[pathIndex].resources = state.items[pathIndex].resources.filter(resource => resource.id !== resourceId)
            }
        },
        addSubPath: (state, action) => {
            const { parentPathId, resourceIndex, subpath, description, tag } = action.payload
            const parentPath = state.items.find(path => path.id === parentPathId)
                        
            if(parentPath && parentPath.resources[resourceIndex]) {
                const newSubPath = {
                    id: uuidv4(),
                    question: subpath,
                    description: description,
                    tags: tag ? [tag] : [],
                    relatedTo: parentPath.question,
                    completed: false,
                    subPaths: [],
                    resources: []
                }
                parentPath.resources[resourceIndex].subPaths.push(newSubPath)
            }
        },
        toggleResourceCompleted: (state, action) => {
            const { pathId, resourceId } = action.payload
            const path = state.items.find(path => path.id === pathId)
            if(path) {
                const resourceIndex = path.resources.findIndex(resource => resource.id === resourceId)
                if(resourceIndex !== -1) {
                    path.resources[resourceIndex].completed = !path.resources[resourceIndex].completed
                }
            }
        },
        toggleSubPathCompleted: (state, action) => {
            const { pathId, resourceId, subPathId } = action.payload
            const path = state.items.find(path => path.id === pathId)
            if(path) {
                const resource = path.resources.find(resource => resource.id === resourceId)
                if(resource) {
                    const subPathIndex = resource.subPaths.findIndex(subPath => subPath.id === subPathId)
                    if(subPathIndex !== -1) {
                    resource.subPaths[subPathIndex].completed = !resource.subPaths[subPathIndex].completed
                }}
            }
        }
    }
})

export const { addPath, addResource, removeResource, addSubPath, toggleResourceCompleted, toggleSubPathCompleted, resetLastAddedPathId } = pathSlice.actions
export default pathSlice.reducer