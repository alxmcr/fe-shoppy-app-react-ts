import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TagProductFilterList from '.';
import {
    filterTagFreqTime,
    filterTagName,
} from '../../../../mockData/generateFilterProductTags';

describe('TagProductFilterList test', () => {
  test('renders correctly, only name as filter product tag', () => {
    render(<TagProductFilterList filterProductTags={[filterTagName]} />);

    // Ui elements
    const listOfTags = screen.getByRole('list');
    const tags = screen.getAllByRole('listitem');
    const tagName = screen.getByRole('listitem', {
      name: `tag-product-filter-${filterTagName.value}`,
    });
    const btnDeleteTagName = screen.getByRole('button', {
      name: `Button remove tag: '${filterTagName.value}'`,
    });

    // Assertions
    expect(listOfTags).toBeInTheDocument();
    expect(tags).toHaveLength(1);
    expect(tagName).toBeInTheDocument();
    expect(btnDeleteTagName).toBeInTheDocument();
  });

  test('renders correctly, only frequency time as filter product tag', () => {
    render(<TagProductFilterList filterProductTags={[filterTagFreqTime]} />);

    // Ui elements
    const listOfTags = screen.getByRole('list');
    const tags = screen.getAllByRole('listitem');
    const tagFreqTime = screen.getByRole('listitem', {
      name: `tag-product-filter-${filterTagFreqTime.value}`,
    });
    const btnDeleteTagFreqTime = screen.getByRole('button', {
      name: `Button remove tag: '${filterTagFreqTime.value}'`,
    });

    // Assertions
    expect(listOfTags).toBeInTheDocument();
    expect(tags).toHaveLength(1);
    expect(tagFreqTime).toBeInTheDocument();
    expect(btnDeleteTagFreqTime).toBeInTheDocument();
  });

  test('renders correctly, tags with name and frequency time', () => {
    render(
      <TagProductFilterList
        filterProductTags={[filterTagName, filterTagFreqTime]}
      />,
    );

    // Ui elements
    const listOfTags = screen.getByRole('list');
    const tags = screen.getAllByRole('listitem');

    // Tags name
    const tagName = screen.getByRole('listitem', {
      name: `tag-product-filter-${filterTagName.value}`,
    });
    const btnDeleteTagName = screen.getByRole('button', {
      name: `Button remove tag: '${filterTagName.value}'`,
    });

    // Tag freq time
    const tagFreqTime = screen.getByRole('listitem', {
      name: `tag-product-filter-${filterTagFreqTime.value}`,
    });
    const btnDeleteTagFreqTime = screen.getByRole('button', {
      name: `Button remove tag: '${filterTagFreqTime.value}'`,
    });

    // Asserts
    expect(listOfTags).toBeInTheDocument();
    expect(tags).toHaveLength(2);
    expect(tagName).toBeInTheDocument();
    expect(btnDeleteTagName).toBeInTheDocument();
    expect(tagFreqTime).toBeInTheDocument();
    expect(btnDeleteTagFreqTime).toBeInTheDocument();
  });
});
