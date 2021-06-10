import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha o seu endereço e veja todos os profissionais da sua localidade'}
      />

      <UserInformation 
        name={'Allan Capistrano'}
        picture={'https://github.com/AllanCapistrano.png'}
        rating={4}
        description={'Bahia'}
      />
    </div>
  );
}
