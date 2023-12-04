<script setup lang="ts">
import type Feature from '@/models/Feature';
import CardComponent from './CardComponent.vue';
import type { IconType } from '@/models/IconType';
import { ActionTypeEnum } from '@/models/ActionTypeEnum';

defineProps<{
  sectionTitle: string,
  sectionSubTitle?: string,
  features: Feature[],
  twoColumn?: boolean
}>();
</script>

<template>
  <div class="d-flex flex-column border border-3 rounded-3 p-3">
    <h2 class="text-uppercase text-center">{{ sectionTitle }}</h2>
    <h3 v-if="sectionSubTitle" class="text-uppercase text-center">{{ sectionSubTitle }}</h3>
    <h4 v-if="nonPassives.length > 0" class="text-uppercase text-center pt-4">Active Skills</h4>
    <div v-if="nonPassives.length > 0" class="gap-3" :class="twoColumn ? 'grid-container-2col' : 'd-flex flex-column'">
      <div
          v-for="card in nonPassives"
          :key="card.id"
          class="d-flex flex-column gap-3">
        <CardComponent :title="card.name"
          :body="card.description ?? ''"
          :iconType="card.iconType as IconType"
          :subBody="subText(card)" />
        <div v-if="card.contents" class="d-flex flex-column ps-5 gap-3">
          <div v-for="subCard in card.contents" :key="subCard.id">            
            <CardComponent :title="subCard.name"
              class="h-100"
              :body="subCard.description"
              :iconType="subCard.iconType"
              size="icon-small"
              :subBody="subText(subCard)"/>
          </div>
        </div>
      </div>    
    </div>
    <h4 v-if="passives.length > 0" class="text-uppercase text-center pt-4">Passive Skills</h4>
    <div v-if="passives.length > 0" class="gap-3" :class="twoColumn ? 'grid-container-2col' : 'd-flex flex-column'">
      <div
          v-for="card in passives"
          :key="card.id"
          class="d-flex flex-column gap-3">
        <CardComponent :title="card.name"
          :body="card.description ?? ''"
          :iconType="card.iconType as IconType"
          :subBody="subText(card)" />
        <div v-if="card.contents" class="d-flex flex-column ps-5 gap-3">
          <div v-for="subCard in card.contents" :key="subCard.id">            
            <CardComponent :title="subCard.name"
              class="h-100"
              :body="subCard.description"
              :iconType="subCard.iconType"
              size="icon-small"
              :subBody="subText(subCard)"/>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script lang="ts">
export default {
    data() {},
    computed: {
      passives: function() {
        const c = this.features.filter(f => f.actionType.toUpperCase() === ActionTypeEnum.Passive);
        console.log("features", this.features);
        console.log("ActionTypeEnum", ActionTypeEnum.Passive);
        console.log("passives", c);
        return c;
      },
      nonPassives: function() {
        return this.features.filter(f => f.actionType.toUpperCase() !== ActionTypeEnum.Passive);
      },
      sortedFeatures: function() {
        // Sort features with passives at the bottom
        // TODO: better sorting to take order into consideration, this is just a quick fix for now
        return [...this.nonPassives, ...this.passives];
      }
    },
    methods: {
      subText: function(feature: Feature) {
        // combine: ActionType, Usage, Conditions, Source
        const subTextArray = [];
        subTextArray.push(`Action Type: ${feature.actionType.toString().toUpperCase()}`);
        if(feature.usage) {
          subTextArray.push(`Usage: ${feature.usage}`);
        }
        if(feature.conditions && feature.conditions.length > 0) {
          feature.conditions.forEach(cond => subTextArray.push(`Condition: ${cond}`));
        }
        if(feature.featureType) {
          subTextArray.push(`Source: ${feature.featureType.toString().toUpperCase()}(${feature.parentId?.toUpperCase()})`);
        }
        return subTextArray;
      }
    }
  }
</script>