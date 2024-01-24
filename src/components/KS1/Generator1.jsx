import { Heading } from '@/components/Heading'
import { Ochistka2Img } from '@/components/wsk2zonaOchistka2.jsx'
import VideoCom from '../VideoComp.jsx'

export function Genarator11() {
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="generator1"></Heading>

        <ul>
          <li>
            На компрессор станции KC1 установлены 3 единицы Газогенератора «GE
            Jenbacher».
          </li>
          <li>Рабочие параметры газогенератора «GE Jenbacher».</li>
        </ul>
        <ul>
          <li>Марка газогенератора - GE Jenbacher JGC 420 GS-B05</li>
          <li>GE Jenbacher JGC - Производитель</li>
          <li>4 - Производственный ряд</li>
          <li>20 - Число цилиндров</li>
          <li>GS - Принцип работы</li>
          <li>B - Исполнение</li>
          <li>05 - Версия</li>
        </ul>
        <h3>Газогенератора «GE Jenbacher». </h3>

        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRjrPzlFG0bN8GVkW7JMR1xtMd3z3SdwOfYRVXZ4ZoqnxPUem2G2iy-rjdLbjsQzaEyux9dekyLVFp-/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

        <p>
          Газогенератор предназначен для выработки электроэнергии и обеспечить
          электропотребность станции KC1 и вахтового поселка. На станции
          установлен 3 газогенератора, 2 рабочий и 1 резервный.{' '}
        </p>

        <h3>Система электроснабжения</h3>
        <p>
          Электроэнергию станция вырабатывает сама. Для этого имеются 3
          газогенератора марки GE Jenbacher мощностью 1451кВт (среди них 2
          рабочих и 1 резервный, синхронизация агрегатов осуществляется
          автоматически). Через каждый шинный мост протекает ток напряжением 380
          В на вводный включатель. Далее выработанная электроэнергия
          распределяется по электрооборудованием.
        </p>
        <p>
          В качестве резервного(аварийный) источника электроснабжения на КС1
          установлен дизельный генератор Вольво-Стандфорд мощностью 260 кВт. Она
          служит к особой группе систем I-ой категории как САУ, SKADA, к
          аварийному освещению, к пожарный насосной, вытяжным вентилятором и
          другим электрооборудованием.
        </p>
        <p>
          В случае прекращения основного питания, дизель генератор получит
          сигнал от контроллера MRS 16 о прекращения сетевого электропитания и
          запустится автоматически. После того как агрегат устойчив в 12 секунд,
          автоматически вносит в нагрузку.
        </p>
        <p>
          Когда дизель генератор обнаруживает сигнал о восстановления основного
          сетевого электропитания, автоматически останавливается после 5
          минутной охлаждении и восстанавливается в состояние ожидания.
        </p>
      
        <p>
          Так же установлены 2 источника бесперебойного питания UPS
          параллельного соединения мощностью B8033 20kVA-24KW В распределение
          каждого UPS 60 шт аккумулятора по 12 В, время резервного разряда
          параллельной резервной системы больше 2 часов.
        </p>
        <p>Поддерживает электричеством в случае АО газогенераторов:</p>

        <ol>
          <li>Блок управление системой ЕSD</li>
          <li>Система порошкового пожаротушение</li>
          <li>Сигнализация датчика пламя и газа</li>
          <li>Кабина анализа</li>
          <li>Радиоканальной системы связи</li>
          <li>Шкаф управление расходомеров</li>
          <li>Освящения АБК и компьютеры в диспетчерской.</li>
        </ol>

       
      </div>
    </>
  )
}
