import { Company, Resume, PrismaClient } from '@prisma/client';

import { COMPANIES_NAME } from '@/lib/company';

const prisma = new PrismaClient();

async function upsertResume(): Promise<Resume> {
    return await prisma.resume.upsert({
        where: { name: 'Soudant Gaëtan' },
        update: {},
        create: {
            name: 'Soudant Gaëtan',
            summary: 'Mon CV numérique.'
        },
    });
}

async function upsertCompanies(): Promise<Company[]> {
    return [
        // MDS
        await prisma.company.upsert({
            where: { name: COMPANIES_NAME.MDS },
            update: {},
            create: {
                name: COMPANIES_NAME.MDS,
            },
        }),
        // Solidaris
        await prisma.company.upsert({
            where: { name: COMPANIES_NAME.SOLIDARIS },
            update: {},
            create: {
                name: COMPANIES_NAME.SOLIDARIS,
            },
        })
    ];
}

async function upsertExperiences(companies: Company[], resume: Resume): Promise<void> {
    // MDS
    const mds = companies.find(company => company.name === COMPANIES_NAME.MDS);
    if (!mds) return;
    await prisma.experience.upsert({
        where: { experienceCompany: { title: 'Stagiaire en développement web', companyId: mds.id } },
        update: {},
        create: {
            title: 'Stagiaire en développement web',
            description: 'Stage de bachelier 3ème année',
            startDate: new Date('2020-02-01'),
            endDate: new Date('2020-05-31'),
            company: {
                connect: { id: mds.id },
            },
            resume: {
                connect: { id: resume.id },
            }
        },
    });
    await prisma.experience.upsert({
        where: { experienceCompany: { title: 'Développeur web', companyId: mds.id } },
        update: {},
        create: {
            title: 'Développeur web',
            description: 'Développeur web junior',
            startDate: new Date('2020-07-01'),
            endDate: new Date('2020-08-31'),
            company: {
                connect: { id: mds.id },
            },
            resume: {
                connect: { id: resume.id },
            }
        },
    })


    // Solidaris
    const solidaris = companies.find(company => company.name === COMPANIES_NAME.SOLIDARIS);
    if (!solidaris) return;
    await prisma.experience.upsert({
        where: { experienceCompany: { title: 'Analyste programmeur', companyId: solidaris.id } },
        update: {},
        create: {
            title: 'Analyste programmeur',
            description: 'Analyse programmeur PHP / NodeJS',
            startDate: new Date('2020-10-26'),
            company: {
                connect: { id: solidaris.id },
            },
            resume: {
                connect: { id: resume.id },
            }
        },
    });
}

async function upsertSkills(resume: Resume): Promise<void> {
    await prisma.skill.upsert({
        where: { name: 'PHP' },
        update: {},
        create: {
            name: 'PHP',
            level: 70,
            color: '#787CB5',
            resume: {
                connect: { id: resume.id }
            }
        },
    });
    await prisma.skill.upsert({
        where: { name: 'NodeJS' },
        update: {},
        create: {
            name: 'NodeJS',
            level: 80,
            color: '#3C873A',
            resume: {
                connect: { id: resume.id }
            }
        },
    });
    await prisma.skill.upsert({
        where: { name: 'React' },
        update: {},
        create: {
            name: 'React',
            level: 40,
            color: '#61DBFB',
            resume: {
                connect: { id: resume.id }
            }
        },
    });
    await prisma.skill.upsert({
        where: { name: 'Angular' },
        update: {},
        create: {
            name: 'Angular',
            level: 40,
            color: '#C3002F',
            resume: {
                connect: { id: resume.id }
            }
        },
    });
    await prisma.skill.upsert({
        where: { name: 'NestJS' },
        update: {},
        create: {
            name: 'NestJS',
            level: 65,
            color: '#EA2845',
            resume: {
                connect: { id: resume.id }
            }
        },
    });
    await prisma.skill.upsert({
        where: { name: 'NextJS' },
        update: {},
        create: {
            name: 'NextJS',
            level: 10,
            color: '#0A0A0A',
            resume: {
                connect: { id: resume.id }
            }
        },
    });
}

async function main() {
    const resume = await upsertResume();
    const companies = await upsertCompanies();
    await upsertExperiences(companies, resume);
    await upsertSkills(resume);
};

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })