import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import fakerData from "../../utils/faker";
import _ from "lodash";
import preview16Url from "../../assets/images/fakers/preview-16.jpg";
import preview12Url from "../../assets/images/fakers/profile-12.jpg";
import RequireAuth from "../../hooks/RequireAuth";
import {
  useGetEducationsQuery,
  useGetReferencesQuery,
  useGetResumesQuery,
  useGetSkillsQuery,
  useGetUserDataQuery,
  useGetWorkExperienceDescriptionsQuery,
  useGetWorkExperiencesQuery,
} from "../../services/userApi";
import { useEffect } from "react";
import { useAppSelector } from "../../stores/hooks";
import { Link } from "react-router-dom";
import { DASHBOARD_URL } from "../../env";

function Main() {
  const { isFetching, data: userData } = useGetUserDataQuery(null);
  const {  data: resumes } = useGetResumesQuery(userData?.admin_account_id);
  const {  data: work_experiences_api_response_data } = useGetWorkExperiencesQuery(userData?.admin_account_id);
  const {  data: skills_api_response_data } = useGetSkillsQuery(userData?.admin_account_id);
  const {  data: references_api_response_data } = useGetReferencesQuery(userData?.admin_account_id);
  const {  data: educations_api_response_data } = useGetEducationsQuery(userData?.admin_account_id);
  // const {  data: experience_descriptions } = useGetWorkExperienceDescriptionsQuery(null);
  
  const bearerToken = useAppSelector((state) => {
    return state.user?.bearerToken;
  });

  const resume = resumes ? resumes?.data[0]?.attributes : {};
  const work_experiences = work_experiences_api_response_data ? work_experiences_api_response_data?.data.map((ex : any) => ex?.attributes) : [];
  const skills = skills_api_response_data ? skills_api_response_data?.data.map((skill : any) => skill?.attributes) : [];
  const references = references_api_response_data ? references_api_response_data?.data.map((rf : any) => rf?.attributes) : [];
  const educations = educations_api_response_data ? educations_api_response_data?.data.map((ed : any) => ed?.attributes) : [];

  useEffect(() => {
    console.log("userData", userData);
    console.log("Resumes", resumes);
    // console.log("experience_descriptions", experience_descriptions);
    console.log("bearerToken", bearerToken);
    if (userData) {
    }
  }, [userData, resumes]);

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="flex items-center mr-auto text-lg font-medium">
          Online CV
        </h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <a
            href={`${DASHBOARD_URL}content-manager/collectionType/api::resume.resume`}
          >
            <Button variant="primary" className="mr-2 shadow-md">
              <Lucide icon="Pencil" className="w-4 h-4 mr-2" /> Update CV
            </Button>
          </a>
          <Button variant="outline-secondary" className="shadow-md">
            <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download CV
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Profile Cover */}
        <div className="col-span-12">
          <div className="px-3 pt-3 pb-5 box intro-y">
            <div className="image-fit h-80 before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-black/20 to-black before:rounded-md before:z-10">
              <img
                alt=""
                className="rounded-md md:object-[0px_-170px]"
                src={preview16Url}
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center 2xl:flex-row 2xl:text-left">
              <div className="z-20 -mt-20 2xl:-mt-10 2xl:ml-10">
                <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit">
                  <img alt="" src={resume?.profile_picture} />
                </div>
              </div>
              <div className="2xl:ml-5">
                <h2 className="mt-5 text-2xl font-medium">
                  {`${resume?.first_name || '-'} ${resume?.last_name || '-'}`}
                </h2>
                <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                  <Lucide icon="Briefcase" className="w-4 h-4 mr-2" />{" "}
                  {resume?.current_position}
                </div>
                <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                  <Lucide icon="MapPin" className="w-4 h-4 mr-2" />{" "}
                  {resume?.location}
                </div>
              </div>
              <div className="grid h-20 grid-cols-1 px-10 mx-auto mt-5 mb-6 border-dashed gap-y-2 md:gap-y-0 gap-x-5 2xl:border-l 2xl:border-r border-slate-200 2xl:mb-0">
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {userData?.email}
                </div>

                {resume?.twitter_link && (
                  <>
                    <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                      <Lucide icon="Twitter" className="w-4 h-4 mr-2" />
                    </div>
                    <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                      <Lucide icon="Linkedin" className="w-4 h-4 mr-2" />{" "}
                      {resume?.twitter_link}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Cover */}
        {/* BEGIN: Profile Content */}
        <div className="col-span-12 xl:col-span-8">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">
                Professional Summary
              </div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="leading-relaxed">
              <p className="mt-5">{resume?.professional_summary}</p>
              <Button
                variant="outline-secondary"
                className="flex w-full mt-5 border-slate-200/60"
              >
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
              </Button>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Experience</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div>
              {work_experiences?.map((experience: any) => {
                return (
                  <div
                    key={experience?.publishedAt}
                    className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0"
                  >
                    <div className="mr-5">
                      <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                        {experience?.title?.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-medium">
                        {experience?.company}
                      </div>
                      <div className="mt-1 text-slate-500">
                        {experience?.title}
                      </div>
                      <div className="mt-1">{`${experience?.start_date} - ${experience?.end_date}`}</div>
                      <ul className="mt-5 -ml-16 list-disc sm:mt-3 sm:ml-3">
                        <li className="mb-1 last:mb-0">
                          {experience?.description}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              variant="outline-secondary"
              className="flex w-full mt-5 border-slate-200/60"
            >
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
            </Button>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Skills</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="flex flex-wrap">
              {skills?.map((skill: any) => {
                return (
                  <div
                    key={skill?.id}
                    className="px-3 py-1 mb-2 mr-2 border rounded-full bg-primary/10 border-primary/10"
                  >
                    {skill?.skill_name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* END: Profile Content */}
        {/* BEGIN: Profile Side Menu */}
        <div className="col-span-12 xl:col-span-4">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Education</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div>
              {educations?.map((educ: any) => {
                return (
                  <div
                    key={educ?.id}
                    className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0"
                  >
                    <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                      {educ?.institution?.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="ml-5">
                      <div className="text-base font-medium">
                        {educ?.institution}
                      </div>
                      <div className="mt-1 text-slate-500">{educ?.award}</div>
                      <div className="mt-1">{`${new Date(
                        educ?.start_date
                      ).getFullYear()} - ${new Date(
                        educ?.end_date
                      ).getFullYear()}`}</div>
                      <div className="mt-1">{educ?.location}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              variant="outline-secondary"
              className="flex w-full mt-5 border-slate-200/60"
            >
              <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
            </Button>
          </div>
        </div>
        {/* END: Profile Side Menu */}
      </div>
    </>
  );
}

export default Main;
