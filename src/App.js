import React, {useRef} from 'react';

import {Header} from './componnets/Header';
import {About} from './componnets/About';
import {Facts} from './componnets/Facts';
import {Terms} from './componnets/Terms';
import {Vacancies} from './componnets/Vacancies';
import {Footer} from './componnets/Footer';

const data = [
    {
        title: 'Application Security Analyst',
        text: 'В проект для крупной телеком компании в области кибербезопасности мы ищем инженеров, которые будут проводить анализ систем клиента на предмет уязвимостей от кибератак. Если Вы Java разработчик и интересуетесь проектами в области безопасности (даже не имея опыта анализа систем), то это вакансия для вас.',
        link: 'https://firstlinesoftware.me/vacancies/application-security-analyst-3/'
    },
    {
        title: 'Manual QA in marketing',
        text: 'Мы ищем инженеров по тестированию в проект по разработке e-Commerce платформы для международной компания по разработке и реализации маркетинговой продукции, с офисами в США и Великобритании. Опыт ручного тестирования больше года, хороший английский и желание развиваться вместе с нами.',
        link: 'https://firstlinesoftware.me/vacancies/manual-qa-in-marketing-3/'
    },
    {
        title: 'Manual tester',
        text: 'Проект для компании — лидера\n' +
            'на рынке недвижимости в США. Группа проектов направлена на то, чтобы помочь Клиенту определить выставленную на продажу недвижимость для финансовой оценки потенциальных инвестиций, а также на предоставление арендаторам услуг по обслуживанию арендуемых помещений',
        link: 'https://firstlinesoftware.me/vacancies/manual-tester-for-real-estate-projects-2/'
    },
    {
        title: 'Full-stack developer',
        text: 'Проект для компании - лидера на рынке недвижимости в США. Группа проектов направлена на то, чтобы помочь нашему Клиенту определить выставленную на продажу недвижимость для финансовой оценки потенциальных инвестиций и будущего приобретения.',
        link: 'https://firstlinesoftware.me/vacancies/net-react-developer-3/'
    },
    {
        title: 'Java Developer',
        text: 'Наша компания участвует в серии проектов в области разработки решений для аналитики данных о здоровье.\n' +
            'В настоящее время мы отвечаем за разработку Athena, автоматизированной системы для создания и поддержки стандартных словарей OMOP.',
        link: 'https://firstlinesoftware.me/vacancies/java-developer-in-healthcare-3/'
    },
    {
        title: 'QA Automation Engineer',
        text: 'Мы разрабатываем систему для клиентов американской компании полиграфических и маркетинговых услуг. Мы ищем инженера по автоматизации тестирования, который будет заниматься комплексным тестированием. Технологии, которые мы используем в проекте: Selenium, Java, CSS, XPath и TestNG',
        link: 'https://firstlinesoftware.me/vacancies/qa-automation-engineer-6/'
    },
    {
        title: 'C++ Developer for WMS',
        text: 'Мы ищем опытных разработчиков C++ для большой системы управления складом. Цель системы — автоматизировать складскую логистику: приемку, размещение, комплектование, отгрузку и другие дополнительные процессы. Решение охватывает типы складов, от полностью ручных до 100% автоматизированных.',
        link: 'https://firstlinesoftware.me/vacancies/c-developer-for-wms-2/'
    },
    {
        title: 'C++ Developer in Medical industry',
        text: 'Мы ищем опытных разработчиков C++ для совместной работы в проектах по разработке ПО для ведущего поставщика технологических решений в области невидимой ортодонтии. Основное направление проекта — 3D CAD-система на базе Windows, написанная на C++, облачные сервисы, построенные на основе технологии C++.',
        link: 'https://firstlinesoftware.me/vacancies/c-developer-in-medical-industry-3/'
    },
]

function App() {
    const ref = useRef(null)

    const scroll_handler = () => ref.current.scrollIntoView()

    return (
        <div className="App">
            <Header handler={scroll_handler}/>
            <About/>
            <Facts/>
            <Terms/>
            <Vacancies scrollRef={ref} vacancies={data}/>
            <Footer/>
        </div>
    );
}

export default App;
