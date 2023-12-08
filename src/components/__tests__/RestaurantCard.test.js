import { render, screen } from "@testing-library/react";
import RestCard, { promotedRestCard } from "../RestaurantCard";
import MOCK_DATA from "../__tests__/mocks/restMockData.json";
import '@testing-library/jest-dom';

test("Should render Rest Card with props data", () => {
    render(
        <RestCard resData={MOCK_DATA}></RestCard>
    )

    const rest = screen.getByText('Anna\'s - Proud To Be South Indian');
    expect(rest).toBeInTheDocument();
})

test("Should render a Promoted Rest Card with props data", () => {
    const PromotedRest = promotedRestCard(RestCard)
    render(
        <PromotedRest resData={MOCK_DATA}/>
    )

    const rest = screen.getByText('Promoted');
    expect(rest).toBeInTheDocument();

})