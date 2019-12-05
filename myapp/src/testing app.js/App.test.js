import React from 'react';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Dashboard from '../components/dashboard';
import Scoreboard from '../components/scoreboard';


afterEach(rtl.cleanup)

it('renders without running into problems', () => {
    const wrapper = rtl.render(<Dashboard />)
    wrapper.debug()

    const strike = wrapper.queryByText(/strike/i)
    const ball = wrapper.queryByText(/ball/i)
    const foul = wrapper.queryByText(/foul/i)
    const hit = wrapper.queryByText(/hit/i)

    expect(strike).toBeInTheDocument()
    expect(ball).toBeInTheDocument()
    expect(foul).toBeInTheDocument()
    expect(hit).toBeInTheDocument()
})

it('renders without running into problems', () => {
    const wrapper = rtl.render(<App />)
    wrapper.debug()

    const controls = wrapper.queryByText(/controls/i)
    const scoreboard = wrapper.queryByText(/scoreboard/i)


    expect(controls).toBeInTheDocument()
    expect(scoreboard).toBeInTheDocument()

})

