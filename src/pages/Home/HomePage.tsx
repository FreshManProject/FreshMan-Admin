import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';

import { HeaderTitle } from '@/components/common';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CategoryPage, CategoryRegister } from '../Category';
import { useGetCategory } from '@/hooks/query/category';

export default function HomePage() {
    const [addCategory, setAddCategory] = useState(false);
    const { category, isLoadingCategory } = useGetCategory();

    const handleClickOutside = (event: MouseEvent) => {
        const categoryRegisterTab = document.querySelector('#add-category-tab');
        if (
            categoryRegisterTab &&
            !categoryRegisterTab.contains(event.target as Node)
        ) {
            setAddCategory(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleAddCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAddCategory((prev) => !prev);
    };

    if (isLoadingCategory || !category) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <HeaderTitle title="HOME" />
            <h2 className="pt-5">카테고리</h2>
            <Tabs className="pt-3">
                <TabList>
                    {category.list.map(({ categorySeq, name }) => (
                        <Tab key={categorySeq}>
                            <h3 className="h-7 bg-transparent after:none">
                                {name}
                            </h3>
                        </Tab>
                    ))}
                    <Tab>
                        {addCategory ? (
                            <div id="add-category-tab">
                                <CategoryRegister onClick={toggleAddCategory} />
                            </div>
                        ) : (
                            <button onClick={toggleAddCategory}>+</button>
                        )}
                    </Tab>
                </TabList>
                {category.list.map(({ categorySeq, name }) => (
                    <TabPanel key={categorySeq}>{name}</TabPanel>
                ))}
                <TabPanel>
                    <CategoryPage />
                </TabPanel>
            </Tabs>
        </div>
    );
}
