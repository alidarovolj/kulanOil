<template>
  <div
    class="static lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 w-full lg:translate-y-1/2"
  >
    <div class="container mx-auto px-4 lg:px-0">
      <div class="block lg:flex w-full lg:w-max font-bold customShadow">
        <div
          @click="activeBlock = 1"
          :class="{ 'bg-white text-buttonBg': activeBlock == 1 }"
          class="py-4 px-5 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none bg-sectionBg hover:cursor-pointer hover:text-buttonBg transition-all"
        >
          Рассчитать стоимость
        </div>
        <div
          @click="activeBlock = 2"
          :class="{ 'bg-white text-buttonBg': activeBlock == 2 }"
          class="py-4 px-5 bg-sectionBg hover:cursor-pointer hover:text-buttonBg transition-all"
        >
          Вызвать курьера
        </div>
        <div
          @click="activeBlock = 3"
          :class="{ 'bg-white text-buttonBg': activeBlock == 3 }"
          class="py-4 px-5 rounded-tr-none lg:rounded-tr-xl bg-sectionBg hover:cursor-pointer hover:text-buttonBg transition-all"
        >
          Отследить посылку
        </div>
      </div>
      <div
        class="bg-white py-5 px-8 rounded-b-xl lg:rounded-tr-xl customShadow"
      >
        <div>
          <div
            v-if="activeBlock == 1"
            class="block lg:flex items-start justify-between mb-3"
          >
            <div class="w-full lg:w-third">
              <div class="relative w-full mb-3">
                <div class="relative">
                  <input
                    @click="filterState = 1"
                    v-model="filterFromInp"
                    class="pl-12 pr-5 py-4 border border-inputBorder rounded-xl w-full"
                    type="text"
                    :class="{ 'border-buttonBg': error && !from }"
                    placeholder="Откуда"
                  />
                  <div
                    v-if="filterState == 1 && !from"
                    class="absolute top-full left-0 w-full bg-white font-bold max-h-40 overflow-y-auto rounded-b-xl shadow-md"
                  >
                    <div
                      @click="
                        from = item;
                        filterFromInp = item.address;
                      "
                      class="py-2 px-4 hover:bg-buttonBg hover:text-white hover:cursor-pointer transition-all"
                      v-for="(item, index) of filterFrom"
                      :key="index"
                    >
                      {{ item.address }}
                    </div>
                  </div>
                </div>
                <i
                  class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2"
                ></i>
              </div>
              <div v-if="!from" class="flex flex-wrap">
                <p
                  @click="
                    from = item;
                    filterFromInp = item.address;
                  "
                  v-for="(item, index) of dataAlias.cities"
                  :key="index"
                  class="mr-3 py-2 px-3 mb-2 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
                >
                  {{ item.address }}
                </p>
              </div>
              <div v-else class="flex flex-wrap">
                <p
                  @click="
                    from = item;
                    filterFromInp = item.address;
                  "
                  v-for="(item, index) of dataAlias.cities"
                  :key="index"
                  :class="{ '!bg-buttonBg text-white': item.id == from.id }"
                  class="mr-3 py-2 px-3 bg-sectionBg mb-2 rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
                >
                  {{ item.address }}
                </p>
              </div>
            </div>
            <img
              @click="switchValues"
              class="px-3 mx-auto my-4 lg:my-0 lg:mt-4 hover:rotate-180 transition-all hover:cursor-pointer"
              src="@/assets/img/change.png"
              alt=""
            />
            <div class="w-full lg:w-third mb-5 lg:mb-0">
              <div class="relative w-full mb-3">
                <input
                  @click="filterState = 2"
                  @input="to = null"
                  :class="{ 'border-buttonBg': error && !to }"
                  v-model="filterToInp"
                  class="pl-12 pr-5 py-4 border border-inputBorder rounded-xl w-full"
                  type="text"
                  placeholder="Куда"
                />
                <div
                  v-if="filterState == 2 && !to"
                  class="absolute top-full left-0 w-full bg-white font-bold max-h-40 overflow-y-auto rounded-b-xl shadow-md"
                >
                  <div
                    @click="
                      to = item;
                      filterToInp = item.address;
                    "
                    class="py-2 px-4 hover:bg-buttonBg hover:text-white hover:cursor-pointer transition-all"
                    v-for="(item, index) of filterTo"
                    :key="index"
                  >
                    {{ item.address }}
                  </div>
                </div>
                <i
                  class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2"
                ></i>
              </div>
              <div v-if="!to" class="flex flex-wrap">
                <p
                  @click="
                    to = item;
                    filterToInp = item.address;
                  "
                  v-for="(item, index) of dataAlias.cities"
                  :key="index"
                  class="mr-3 py-2 px-3 mb-2 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
                >
                  {{ item.address }}
                </p>
              </div>
              <div v-else class="flex flex-wrap">
                <p
                  @click="
                    to = item;
                    filterToInp = item.address;
                  "
                  v-for="(item, index) of dataAlias.cities"
                  :key="index"
                  :class="{ '!bg-buttonBg text-white': item.id == to.id }"
                  class="mr-3 py-2 px-3 bg-sectionBg mb-2 rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
                >
                  {{ item.address }}
                </p>
              </div>
            </div>
            <Button
              @click="calculatePrice"
              class="w-full lg:w-third ml-0 lg:ml-6 text-xs lg:text-sm"
              title="Рассчитать стоимость"
            />
          </div>
          <div class="block lg:flex" v-if="price">
            <div class="flex mr-0 lg:mr-10 mb-3 lg:mb-0">
              <i
                class="fa-sharp fa-solid fa-map-pin text-lg text-secondaryColor mr-2"
              ></i>
              <p>
                Расстояние:
                <span class="font-bold">{{ price.distance }} км</span>
              </p>
            </div>
            <div class="flex mr-0 lg:mr-10 mb-3 lg:mb-0">
              <i
                class="fa-regular fa-clock text-lg text-secondaryColor mr-2"
              ></i>
              <p>
                Время:
                <span class="font-bold">{{ price.time }} часов</span>
              </p>
            </div>
            <div class="flex">
              <i
                class="fa-regular fa-clock text-lg text-secondaryColor mr-2"
              ></i>
              <p>
                Стоимость:
                <span class="font-bold">{{ price.price }} тенге</span>
              </p>
            </div>
          </div>
        </div>
        <div
          v-if="activeBlock == 2"
          class="block lg:flex items-start justify-between"
        >
          <div class="w-full lg:w-third">
            <div class="relative w-full mb-3">
              <input
                class="pl-12 pr-5 py-4 border border-inputBorder rounded-xl w-full"
                type="text"
                placeholder="Откуда"
              />
              <i
                class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2"
              ></i>
            </div>
            <div class="flex">
              <p
                class="mr-3 py-2 px-3 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
              >
                Астана
              </p>
              <p
                class="mr-3 py-2 px-3 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
              >
                Алматы
              </p>
              <p
                class="mr-3 py-2 px-3 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
              >
                Шымкент
              </p>
            </div>
          </div>
          <img
            class="px-3 mx-auto my-4 lg:my-0 lg:mt-4 hover:rotate-180 transition-all hover:cursor-pointer"
            src="@/assets/img/change.png"
            alt=""
          />
          <div class="w-full lg:w-third mb-5 lg:mb-0">
            <div class="relative w-full mb-3">
              <input
                class="pl-12 pr-5 py-4 border border-inputBorder rounded-xl w-full"
                type="text"
                placeholder="Куда"
              />
              <i
                class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2"
              ></i>
            </div>
            <div class="flex">
              <p
                class="mr-3 py-2 px-3 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
              >
                Астана
              </p>
              <p
                class="mr-3 py-2 px-3 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
              >
                Алматы
              </p>
              <p
                class="mr-3 py-2 px-3 bg-sectionBg rounded-xl hover:cursor-pointer hover:bg-buttonBg hover:text-white transition-all"
              >
                Шымкент
              </p>
            </div>
          </div>
          <Button
            class="w-full lg:w-third ml-0 lg:ml-6 text-xs lg:text-sm"
            title="Вызвать курьера"
          />
        </div>
        <div
          v-if="activeBlock == 3"
          class="block lg:flex items-start justify-between"
        >
          <div class="w-full lg:w-2/3 mb-3 lg:mb-0">
            <div class="relative w-full">
              <input
                class="pl-12 pr-5 py-4 border border-inputBorder rounded-xl w-full"
                type="text"
                placeholder="Укажите номер накладной"
              />
              <i
                class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2"
              ></i>
            </div>
          </div>
          <Button
            class="w-full lg:w-1/3 ml-0 lg:ml-6 text-xs lg:text-sm"
            title="Отследить посылку"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import dbData from "../../../../db.json";
import { ref, computed } from "vue";

export default {
  name: "SearchBlock",
  setup() {
    const activeBlock = ref(1);
    const from = ref(null);
    const to = ref(null);
    const filterFromInp = ref("");
    const filterToInp = ref("");
    const filterState = ref(null);
    const price = ref(null);
    const error = ref(false);
    const dataAlias = ref(dbData);

    const filterFrom = computed(() =>
      filterCities(dataAlias.value.cities, filterFromInp.value)
    );
    const filterTo = computed(() =>
      filterCities(dataAlias.value.cities, filterToInp.value)
    );

    function calculatePrice() {
      if (!to.value || !from.value) {
        this.$toast.error(`Пожалуйста заполните поля`, {
          position: "top-right",
        });
        error.value = true;
        return;
      }

      if (to.value === from.value) {
        this.$toast.error(`Пункт А и Б совпадают`, { position: "top-right" });
        error.value = true;
        return;
      }

      const distanceObj = dataAlias.value.distances.find(
        (value) =>
          (value.from === from.value.id && value.to === to.value.id) ||
          (value.to === from.value.id && value.from === to.value.id)
      );
      if (!distanceObj) {
        this.$toast.error(`Distance not found`, { position: "top-right" });
        error.value = true;
        return;
      }

      const distance = distanceObj.value;
      let time = 0;
      if (distance < 100) {
        time = 24;
      } else if (distance < 500) {
        time = 48;
      } else {
        time = 96;
      }

      const calculatedPrice = time * distance;
      price.value = { distance, time, price: calculatedPrice };

      this.$toast.success(`Спасибо за ваш запрос!`, { position: "top-right" });
      error.value = false;
    }

    function switchValues() {
      [from.value, to.value] = [to.value, from.value];
      [filterFromInp.value, filterToInp.value] = [
        filterToInp.value,
        filterFromInp.value,
      ];
    }

    function filterCities(cities, filterInp) {
      return cities.filter((e) =>
        e.address.toLowerCase().includes(filterInp.toLowerCase())
      );
    }

    return {
      activeBlock,
      from,
      to,
      filterFromInp,
      filterToInp,
      filterState,
      price,
      error,
      dataAlias,
      filterFrom,
      filterTo,
      calculatePrice,
      switchValues,
      filterCities,
      Button,
    };
  },
  components: {
    Button,
  },
};
</script>
