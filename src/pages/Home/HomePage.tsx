import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';

import { HeaderTitle } from '@/components/common';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CategoryRegister } from '../Category';

export default function HomePage() {
    const [addCategory, setAddCategory] = useState(false);

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

    const tabs = [
        {
            title: 'All',
            content: <>'Any content 2',</>,
        },
        {
            title: 'Title 2',
            content: <>'Any content 2',</>,
        },
    ];
    return (
        <div>
            <HeaderTitle title="HOME" />
            <h2 className="pt-5">카테고리</h2>
            <Tabs className="pt-3">
                <TabList>
                    {tabs.map((tab, index) => (
                        <Tab key={index}>
                            <h3 className="h-7 bg-transparent after:none">
                                {tab.title}
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
                {tabs.map((tab, index) => (
                    <TabPanel key={index}>{tab.content}</TabPanel>
                ))}
            </Tabs>
        </div>
    );
}
