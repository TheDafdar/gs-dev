import { Experience, PrismaClient } from '@prisma/client';
import moment from 'moment';

moment.locale('fr');

import { RESUME_VERSION } from '@/lib/resume';
import CircleProgress from '@/components/ui/CircleProgress';

export default async function Resume() {
    const prisma = new PrismaClient();
    const resume = await prisma.resume.findFirstOrThrow({
        where: {
            version: RESUME_VERSION.CURRENT
        },
        include: {
            experiences: {
                include: {
                    company: true
                }
            },
            skills: true,
        },
    });
    const skills = resume.skills, experiences = resume.experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    const getDuration = (e: Experience) => {
        const end = moment(e.endDate || undefined), start = moment(e.startDate);
        const duration = moment.duration(end.diff(start));
        const parts = [
            duration.years() && `${duration.years()} ${duration.years() > 1 ? 'ans' : 'an'}`,
            duration.months() && `${duration.months()} ${duration.months() > 1 ? 'mois' : 'mois'}`,
            duration.days() && `${duration.days()} ${duration.days() > 1 ? 'jours' : 'jour'}`
        ].filter(Boolean);
        return parts.join(', ');
    }

    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-1/5 flex-none">
                <h1 className='text-2xl text-teal-400'>{resume.name}</h1>
                <p>{resume.summary}</p>
                {/* TODO add more design and details (overall make a good DA with CSS) */}
            </div>
            <div className="flex-auto">
                <div className='h-full w-full flex justify-center items-start'>
                    <div className="h-full w-1/3 flex-none text-center">
                        <h1 className='font-bold'>Compétences:</h1>
                        {skills.map(s => (
                            <div key={s.id} className='flex justify-evenly'>
                                <h1>{s.name}</h1>
                                <CircleProgress progress={s.level} color={s.color} />
                            </div>
                        ))}
                    </div>
                    <div className="h-full flex-auto">
                        <ul>
                            {experiences.map(e => (
                                <li key={e.id} className="flex items-center justify-between py-2 border-b border-gray-200 hover:text-teal-500">
                                    <div className="flex items-center">
                                        <div>
                                            <h2 className="text-lg font-semibold">{e.title}</h2>
                                            <p className="text-sm text-gray-500">{e.description}</p>
                                            <em className="text-sm text-gray-500">{e.company.name} . {moment(e.startDate).format('DD/MM/YYYY')} - {e.endDate ? moment(e.endDate).format('DD/MM/YYYY') : 'Présent'} ({getDuration(e)})</em>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
